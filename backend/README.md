# Backend - DownloadMusic

Este proyecto es el backend de la aplicación **DownloadMusic**, que permite descargar música desde YouTube en formato MP3. Está construido con **FastAPI** y utiliza **yt-dlp** para la descarga de audio.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
backend/
├── app/
│   ├── main.py          # Archivo principal para iniciar el servidor FastAPI
│   ├── routes/          # Rutas de la API
│   │   ├── __init__.py  # Inicialización del módulo de rutas
│   │   └── download.py     # Rutas relacionadas con la descarga de música
│   ├── services/        # Lógica de negocio y servicios
│   │   ├── __init__.py  # Inicialización del módulo de servicios
│   │   └── downloader_services .py # Servicio para manejar la descarga de música
│   ├── utils/           # Utilidades y funciones auxiliares
│   │   ├── __init__.py  # Inicialización del módulo de utilidades
│   │   └── logger_utils.py   # Funciones auxiliares
│   └── models/          # Modelos de datos
│       ├── __init__.py  # Inicialización del módulo de modelos
│       └── music.py     # Modelo de datos para la música
├── pyroject.toml        # Dependencias del proyecto
├── uv.lock              # Archivo de dependencia abslutos
└── README.md            # Documentación del proyecto
```

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

Instala el empaquetador uv para inicializar el proyecto desde su repositorio oficial para obtner la documetacion oficila  de uso del empaquetador :  
[https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend
   ```

2. Crea un entorno virtual (opcional pero recomendado):
   ```bash
   uv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. Instala las dependencias necesarias:
   ```bash
   uv pip install -r requirements.txt
   ```
4. Inicializar proyecto:
   ```bash
   uv sync
   uv lock
   uv tree
   ```

## Cómo ejecutar el servidor

1. Asegúrate de estar en el directorio `backend` y que el entorno virtual esté activado (si lo usaste).

2. Ejecuta el servidor FastAPI:
   ```bash
   uvicorn app.main:app --reload o uv run uvicorn app.main:app --reload
   ```

3. El servidor estará disponible en `http://127.0.0.1:8000`. Puedes acceder a la documentación interactiva de la API en:
   - Swagger UI: `http://127.0.0.1:8000/docs`
   - Redoc: `http://127.0.0.1:8000/redoc`

¡Listo! Ahora puedes usar el backend para descargar música desde YouTube.
