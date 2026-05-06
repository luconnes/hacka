"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import Script from "next/script";
import { useHandTracking } from "@/hooks/useHandTracking";

export default function Sessao() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { estadoMao, angulosAtuais, amplitudesMaximas } = useHandTracking(videoRef, canvasRef);

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background overflow-hidden p-6 gap-6">
      {/* Header Panel */}
      <header className="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors bg-transparent border-none"
          >
            <span className="material-symbols-outlined text-primary text-[28px]">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-md text-primary">Sessão: Flexão de Dedos</h1>
            <p className="font-body-md text-on-surface-variant text-sm">Vitality Flow ativado</p>
          </div>
        </div>
        <div className="bg-primary-container/20 text-on-primary-container px-4 py-2 rounded-lg border border-primary-container/30 flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>timer</span>
          <span className="font-label-lg font-bold">04:12</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">

        {/* Scripts do MediaPipe carregados via CDN para evitar o erro do Turbopack */}
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" />


        <div className="flex-1 flex flex-col gap-6 min-h-0">
          {/* Camera Feed Area */}
          <section className="flex-1 relative bg-inverse-surface rounded-2xl overflow-hidden shadow-lg border border-outline-variant">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
              style={{ transform: "scaleX(-1)" }}
            />
            {/* Computer Vision Overlays */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none object-cover"
              width={640}
              height={480}
              style={{ transform: "scaleX(-1)" }}
            />
            {/* Active Badge */}
            <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/20 shadow-md flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="font-label-lg text-on-surface">Câmera Ativa</span>
            </div>
          </section>

          {/* Amplitude de Movimento Box */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm shrink-0">
            <h3 className="font-label-lg text-outline uppercase tracking-widest text-[13px] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">moving</span>
              Amplitude de Movimento
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {Object.entries(amplitudesMaximas).map(([dedo, maximo]) => (
                <div key={dedo} className="bg-surface-container-low border border-outline-variant rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1 text-[10px]">{dedo}</span>
                  <span className="font-headline-md text-primary font-bold">{maximo.toFixed(1)}</span>
                  <span className="text-[10px] text-outline mt-1">° máx</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vitality Flow Side Panel */}
        <aside className="w-full lg:w-[400px] bg-white rounded-2xl shadow-sm border border-outline-variant p-6 flex flex-col justify-between shrink-0 overflow-y-auto">

          <div className="space-y-8">
            {/* Real-time Feedback */}
            <div className={`border p-4 rounded-xl flex items-start gap-3 shadow-inner ${estadoMao === "PALMA ABERTA" ? "bg-green-100 border-green-300" :
                estadoMao === "PALMA FECHADA" ? "bg-red-100 border-red-300" :
                  estadoMao === "ENTRE ABERTA" ? "bg-yellow-100 border-yellow-300" :
                    "bg-primary-container/10 border-primary-container/30"
              }`}>
              <span className={`material-symbols-outlined text-[28px] mt-1 ${estadoMao === "PALMA ABERTA" ? "text-green-600" :
                  estadoMao === "PALMA FECHADA" ? "text-red-600" :
                    estadoMao === "ENTRE ABERTA" ? "text-yellow-600" :
                      "text-primary"
                }`}>
                {estadoMao ? "accessibility_new" : "hourglass_empty"}
              </span>
              <div>
                <h3 className="font-headline-md text-on-surface mb-1">
                  {estadoMao ? `Estado: ${estadoMao}` : "Aguardando detecção..."}
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Monitorando os movimentos da sua mão em tempo real.
                </p>
              </div>
            </div>

            {/* Ângulos por Dedo */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm">
              <h3 className="font-label-lg text-outline uppercase tracking-widest text-[13px] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">straighten</span>
                Ângulos por Dedo
              </h3>
              <div className="space-y-4">
                {Object.entries(angulosAtuais).map(([dedo, angulo]) => (
                  <div key={dedo}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-body-md text-on-surface font-medium">{dedo}</span>
                      <span className="font-label-md text-on-surface-variant font-bold">{angulo}°</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-100 ${
                          dedo === 'Polegar'
                            ? angulo >= 140 ? 'bg-green-500' : angulo <= 60 ? 'bg-red-500' : 'bg-primary'
                            : angulo >= 160 ? 'bg-green-500' : angulo <= 90 ? 'bg-red-500' : 'bg-primary'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(0, (angulo / 180) * 100))}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-outline-variant">
            <button className="h-14 rounded-xl bg-surface-container-highest text-on-surface-variant font-button flex items-center justify-center gap-2 hover:brightness-95 transition-all border-none">
              <span className="material-symbols-outlined">pause_circle</span>
              Pausar
            </button>
            <button className="h-14 rounded-xl bg-error text-white font-button flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 shadow-md transition-all border-none">
              <span className="material-symbols-outlined">stop_circle</span>
              Encerrar
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
