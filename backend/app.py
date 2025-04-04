from fastapi import FastAPI
from routes.download import download_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(download_router, prefix="/api", tags=["download"])

# 🔹 Configurar CORS para permitir solicitudes desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React en Vite usa este puerto
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000, reload=True)
