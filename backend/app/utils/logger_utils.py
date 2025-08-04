import logging
import pathlib

# --- Configuración del Logger ---

# 1. Crear la carpeta de logs si no existe
LOGS_DIR = pathlib.Path("app/logs")
LOGS_DIR.mkdir(exist_ok=True)

# 2. Configuración básica del logging
logging.basicConfig(
    level=logging.INFO,  # Nivel mínimo de logs a registrar
    format="%(asctime)s - %(levelname)s - %(name)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    handlers=[
        # Handler para guardar logs en un archivo con rotación
        logging.handlers.RotatingFileHandler(
            LOGS_DIR / "app.log",
            maxBytes=5 * 1024 * 1024,  # 5 MB por archivo
            backupCount=3,  # Mantener 3 archivos de respaldo
        ),
        # Handler para mostrar logs en la consola
        logging.StreamHandler(),
    ],
)

# 3. Obtener el logger para la aplicación
logger = logging.getLogger("download_music_app")

# --- Fin de la Configuración ---
