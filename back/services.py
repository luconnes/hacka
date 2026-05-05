import httpx
import os
from dotenv import load_dotenv

load_dotenv()

APPLICATION_ID = os.getenv("APPLICATION_ID")
REST_API_KEY = os.getenv("REST_API_KEY")
BASE_URL_ANALISE = "https://parseapi.back4app.com/classes/AnaliseMao"

HEADERS = {
    "X-Parse-Application-Id": APPLICATION_ID,
    "X-Parse-REST-API-Key": REST_API_KEY,
    "Content-Type": "application/json"
}

async def salvar_analise_maos(estado: str, amplitudes_maximas: dict):
    payload = {"estado": estado}
    payload.update(amplitudes_maximas)

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(BASE_URL_ANALISE, json=payload, headers=HEADERS)
            return response.json()
        except Exception as e:
            print(f"Erro ao conectar ao Back4App: {e}")
            return None