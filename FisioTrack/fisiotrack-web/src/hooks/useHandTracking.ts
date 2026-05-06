import { useEffect, useRef, useState, useCallback } from "react";
import type { Results } from "@mediapipe/hands";

interface Point {
  x: number;
  y: number;
}

const calcularAngulo = (a: Point, b: Point, c: Point) => {
  const ba = { x: a.x - b.x, y: a.y - b.y };
  const bc = { x: c.x - b.x, y: c.y - b.y };

  const normBa = Math.sqrt(ba.x * ba.x + ba.y * ba.y);
  const normBc = Math.sqrt(bc.x * bc.x + bc.y * bc.y);

  if (normBa === 0 || normBc === 0) return 0;

  let cosAngulo = (ba.x * bc.x + ba.y * bc.y) / (normBa * normBc);
  cosAngulo = Math.max(-1.0, Math.min(1.0, cosAngulo)); // np.clip equivalente
  
  return (Math.acos(cosAngulo) * 180) / Math.PI; // np.degrees equivalente
};

const THRESHOLDS = {
  Polegar:   { aberto: 140, fechado: 60 },
  Indicador: { aberto: 160, fechado: 90 },
  Medio:     { aberto: 160, fechado: 90 },
  Anelar:    { aberto: 160, fechado: 90 },
  Minimo:    { aberto: 150, fechado: 85 },
};

const verificarEstadoMao = (angulos: Record<string, number>) => {
  let abertos = 0;
  let fechados = 0;

  Object.entries(angulos).forEach(([dedo, angulo]) => {
    const t = THRESHOLDS[dedo as keyof typeof THRESHOLDS];
    if (angulo >= t.aberto) abertos++;
    if (angulo <= t.fechado) fechados++;
  });

  if (abertos === 5) return "PALMA ABERTA";
  if (fechados >= 4) return "PALMA FECHADA";
  return "ENTRE ABERTA";
};

const DEDOS_LANDMARKS = {
  Polegar: [1, 2, 4],  // CMC → MCP → Tip: captura o arco completo do polegar
  Indicador: [5, 6, 7],
  Medio: [9, 10, 11],
  Anelar: [13, 14, 15],
  Minimo: [17, 18, 19],
};

const FRAMES_PARA_CONFIRMAR = 15;

export const useHandTracking = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) => {
  const [estadoConfirmado, setEstadoConfirmado] = useState<string | null>(null);
  
  const [angulosAtuais, setAngulosAtuais] = useState<Record<string, number>>({
    Polegar: 0.0,
    Indicador: 0.0,
    Medio: 0.0,
    Anelar: 0.0,
    Minimo: 0.0,
  });

  const [amplitudesMaximas, setAmplitudesMaximas] = useState<Record<string, number>>({
    Polegar: 0.0,
    Indicador: 0.0,
    Medio: 0.0,
    Anelar: 0.0,
    Minimo: 0.0,
  });

  const estadoTemporario = useRef<string | null>(null);
  const contadorFrames = useRef<number>(0);

  const onResults = useCallback((results: Results) => {
    // Desenha os pontos na tela
    if (canvasRef.current && videoRef.current) {
      const canvasCtx = canvasRef.current.getContext("2d");
      if (canvasCtx) {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          for (const landmarks of results.multiHandLandmarks) {
            const w = window as any;
            if (w.drawConnectors && w.HAND_CONNECTIONS) {
              w.drawConnectors(canvasCtx, landmarks, w.HAND_CONNECTIONS, {
                color: "#00FF00",
                lineWidth: 5,
              });
            }
            if (w.drawLandmarks) {
              w.drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
            }
          }
        }
        canvasCtx.restore();
      }
    }

    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      return;
    }

    // Processa a primeira mão encontrada
    const handLandmarks = results.multiHandLandmarks[0];
    const novosAngulos: Record<string, number> = {};

    Object.entries(DEDOS_LANDMARKS).forEach(([nome, ids]) => {
      const p1 = handLandmarks[ids[0]];
      const p2 = handLandmarks[ids[1]];
      const p3 = handLandmarks[ids[2]];

      const angulo = calcularAngulo(p1, p2, p3);
      novosAngulos[nome] = parseFloat(angulo.toFixed(1));
    });

    setAngulosAtuais(novosAngulos);

    setAmplitudesMaximas((prev) => {
      let novasAmplitudes = { ...prev };
      let updated = false;
      Object.entries(novosAngulos).forEach(([nome, angulo]) => {
        if (angulo > prev[nome]) {
          novasAmplitudes[nome] = angulo;
          updated = true;
        }
      });
      return updated ? novasAmplitudes : prev;
    });

    const estadoDetectadoAgora = verificarEstadoMao(novosAngulos);

    if (estadoDetectadoAgora === estadoTemporario.current) {
      contadorFrames.current += 1;
    } else {
      estadoTemporario.current = estadoDetectadoAgora;
      contadorFrames.current = 0;
    }

    if (contadorFrames.current >= FRAMES_PARA_CONFIRMAR) {
      const novoEstado = estadoTemporario.current;
      setEstadoConfirmado(prev => {
        if (prev !== novoEstado) {
          return novoEstado;
        }
        return prev;
      });
    }
  }, [canvasRef]);

  useEffect(() => {
    if (!videoRef.current) return;

    let animationFrameId: number;
    let stream: MediaStream | null = null;
    let isRunning = true;
    let hands: any = null;

    const initMediaPipe = () => {
      const Hands = (window as any).Hands;
      if (!Hands) {
        if (isRunning) setTimeout(initMediaPipe, 100);
        return;
      }

      hands = new Hands({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });

      hands.onResults(onResults);
      startCameraAndDetection();
    };

    const startCameraAndDetection = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          
          // Quando o vídeo estiver pronto, começamos o loop de detecção
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            detectFrame();
          };
        }
      } catch (err) {
        console.error("Erro ao acessar a câmera:", err);
      }
    };

    const detectFrame = async () => {
      if (!isRunning) return;
      
      if (videoRef.current && videoRef.current.readyState >= 2) {
        try {
          await hands.send({ image: videoRef.current });
        } catch (err) {
          console.error("Erro ao processar o frame:", err);
        }
      }
      
      if (isRunning) {
        animationFrameId = requestAnimationFrame(detectFrame);
      }
    };

    initMediaPipe();

    return () => {
      isRunning = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (hands) hands.close();
    };
  }, [videoRef, onResults]);

  // Retorna os dados para que o frontend possa exibir ou salvar
  return {
    estadoMao: estadoConfirmado,
    angulosAtuais,
    amplitudesMaximas
  };
};
