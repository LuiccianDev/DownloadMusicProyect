# Backend - DownloadMusic

Este proyecto es el backend de la aplicación **DownloadMusic**, que permite descargar música desde YouTube en formato MP3. Está construido con **FastAPI** y utiliza **yt-dlp** para la descarga de audio.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
backend/
├── app/
│   ├── main.py          # Archivo principal para iniciar el servidor FastAPI
│   ├── routes/          # Rutas de la API
│   ├── services/        # Lógica de negocio y servicios
│   ├── utils/           # Utilidades y funciones auxiliares
│   └── models/          # Modelos de datos
├── requirements.txt     # Dependencias del proyecto
└── README.md            # Documentación del proyecto
```

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend
   ```

2. Crea un entorno virtual (opcional pero recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. Instala las dependencias necesarias:
   ```bash
   pip install -r requirements.txt
   ```

## Cómo ejecutar el servidor

1. Asegúrate de estar en el directorio `backend` y que el entorno virtual esté activado (si lo usaste).

2. Ejecuta el servidor FastAPI:
   ```bash
   uvicorn app:app --reload
   ```

3. El servidor estará disponible en `http://127.0.0.1:8000`. Puedes acceder a la documentación interactiva de la API en:
   - Swagger UI: `http://127.0.0.1:8000/docs`
   - Redoc: `http://127.0.0.1:8000/redoc`

¡Listo! Ahora puedes usar el backend para descargar música desde YouTube.
