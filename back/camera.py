import cv2
import mediapipe as mp
import numpy as np
import pygame
import asyncio
from prisma import Prisma

# Inicializa o mixer de som e o cliente do banco de dados
pygame.mixer.init()
db = Prisma()

async def salvar_no_banco(estado, amplitudes_maximas):
    try:
        await db.connect()
        print("Conectado ao PostgreSQL...")

        # Formata os dados no padrao que o Prisma espera para a tabela Amplitude
        amplitudes_para_salvar = [
            {"articulacao": nome, "anguloMaximo": float(valor)}
            for nome, valor in amplitudes_maximas.items()
        ]

        # Cria a sessao e vincula as amplitudes em uma unica transacao
        sessao_criada = await db.sessao.create(
            data={
                'estado': estado,
                'amplitudes': {
                    'create': amplitudes_para_salvar
                }
            }
        )

        print(f"Dados salvos com sucesso! ID da Sessao: {sessao_criada.id}")
        await db.disconnect()

    except Exception as e:
        print(f"Erro ao salvar no banco: {e}")

def tocar_som_aberta():
    try:
        som = pygame.mixer.Sound("bom.wav")
        som.play()
    except Exception as e:
        print("Erro ao tocar som:", e) 

def tocar_som_entreaberta():
    try:
        som = pygame.mixer.Sound("mediano.wav")
        som.play()
    except Exception as e:
        print("Erro ao tocar som:", e)

def tocar_som_fechada():
    try:
        som = pygame.mixer.Sound("ruim.wav")
        som.play()
    except Exception as e:
        print("Erro ao tocar som:", e)

def calcular_angulo(a, b, c):
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)

    ba = a - b
    bc = c - b

    if np.linalg.norm(ba) == 0 or np.linalg.norm(bc) == 0:
        return 0

    cos_angulo = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc))
    cos_angulo = np.clip(cos_angulo, -1.0, 1.0)
    return np.degrees(np.arccos(cos_angulo))

def verificar_estado_mao(angulos):
    dedos_abertos = sum(1 for angulo in angulos.values() if angulo >= 140)
    dedos_fechados = sum(1 for angulo in angulos.values() if angulo <= 90)

    if dedos_abertos == 5:
        return "PALMA ABERTA"
    elif dedos_fechados >= 4:
        return "PALMA FECHADA"
    else:
        return "ENTRE ABERTA"

async def main():
    mp_hands = mp.solutions.hands
    mp_draw = mp.solutions.drawing_utils

    hands = mp_hands.Hands(
        max_num_hands=1,
        min_detection_confidence=0.7,
        min_tracking_confidence=0.7
    )

    cap = cv2.VideoCapture(0)

    dedos_landmarks = {
        "Polegar": (2, 3, 4),
        "Indicador": (5, 6, 8),
        "Medio": (9, 10, 12),
        "Anelar": (13, 14, 16),
        "Minimo": (17, 18, 20)
    }

    # Dicionario para armazenar o maior angulo atingido por cada dedo
    amplitudes_maximas = {nome: 0.0 for nome in dedos_landmarks.keys()}

    FRAMES_PARA_CONFIRMAR = 15
    contador_frames = 0
    estado_temporario = None
    estado_confirmado = None
    ultimo_estado_tocado = None

    while True:
        ret, frame = cap.read()

        if not ret:
            break

        frame = cv2.flip(frame, 1)
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb)

        estado_detectado_agora = None

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                h, w, _ = frame.shape
                landmarks = hand_landmarks.landmark

                def get_ponto(id):
                    lm = landmarks[id]
                    return [lm.x * w, lm.y * h]

                angulos_atuais = {}

                for nome, (id1, id2, id3) in dedos_landmarks.items():
                    p1 = get_ponto(id1)
                    p2 = get_ponto(id2)
                    p3 = get_ponto(id3)

                    angulo = calcular_angulo(p1, p2, p3)
                    angulos_atuais[nome] = angulo

                    # Atualiza a amplitude maxima se o angulo atual for o maior ja registrado
                    if angulo > amplitudes_maximas[nome]:
                        amplitudes_maximas[nome] = round(angulo, 2)

                    cv2.circle(frame, tuple(map(int, p1)), 5, (255, 0, 0), -1)
                    cv2.circle(frame, tuple(map(int, p2)), 5, (0, 255, 0), -1)
                    cv2.circle(frame, tuple(map(int, p3)), 5, (0, 0, 255), -1)

                estado_detectado_agora = verificar_estado_mao(angulos_atuais)

        if estado_detectado_agora == estado_temporario:
            contador_frames += 1
        else:
            estado_temporario = estado_detectado_agora
            contador_frames = 0

        if contador_frames >= FRAMES_PARA_CONFIRMAR:
            estado_confirmado = estado_temporario

        if estado_confirmado is not None and estado_confirmado != ultimo_estado_tocado:
            if estado_confirmado == "PALMA ABERTA":
                tocar_som_aberta()
            elif estado_confirmado == "ENTRE ABERTA":
                tocar_som_entreaberta()
            elif estado_confirmado == "PALMA FECHADA":
                tocar_som_fechada()
            
            ultimo_estado_tocado = estado_confirmado

        if estado_confirmado is not None:
            if estado_confirmado == "PALMA ABERTA":
                cor = (0, 255, 0)
            elif estado_confirmado == "PALMA FECHADA":
                cor = (0, 0, 255)
            else:
                cor = (0, 255, 255)

            cv2.putText(frame, estado_confirmado, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, cor, 3)

        cv2.imshow("Analise de Movimento", frame)

        # Se apertar ESC, salva no banco de dados e fecha o programa
        if cv2.waitKey(1) & 0xFF == 27:
            if estado_confirmado is not None:
                print("Salvando dados... Nao feche o terminal ainda.")
                await salvar_no_banco(estado_confirmado, amplitudes_maximas)
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    # Inicia o loop assincrono
    asyncio.run(main())