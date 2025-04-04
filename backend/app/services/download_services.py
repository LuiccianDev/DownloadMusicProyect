import yt_dlp
import pathlib
import os
import re
import shutil
from app.utils.logger_utils import logger

# Carpeta donde se guardarán los archivos temporalmente
OUTPUT_FOLDER = pathlib.Path("temp")
OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)
def check_ffmpeg_installed() -> bool:
    """
    Verifica si ffmpeg está instalado y en el PATH.
    Retorna True si se encuentra, False en caso contrario.
    """
    if shutil.which("ffmpeg") is None:
        logger.error("ffmpeg no se encontró. Asegúrate de que ffmpeg esté instalado y en el PATH.")
        return False
    return True

def validar_url(url: str) -> bool:
    """Valida la URL de YouTube y evita listas de reproducción."""
    patron_url = r"^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$"

    if not re.match(patron_url, url):
        logger.error("URL inválida.")
        return False

    if "&list=" in url:
        logger.error("No se permiten listas de reproducción.")
        return False

    return True


def descargar_musica(url: str, filename: str) -> str:
    """Descarga la música desde YouTube con validaciones."""
    if not validar_url(url):
        logger.error("URL no válida o lista de reproducción.")
        return None
    
    # Verificar que ffmpeg esté instalado para realizar la conversión
    if not check_ffmpeg_installed():
        return None

    output_template = str(OUTPUT_FOLDER / f"{filename}.%(ext)s")

    ydl_opts = {
        "format": "bestaudio/best",
        "extractaudio": True,
        "audioformat": "mp3",
        "outtmpl": output_template,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }
        ],
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            downloaded_file = (
                ydl.prepare_filename(info)
                .replace(".webm", ".mp3")
                .replace(".m4a", ".mp3")
            )

        # Ruta final con el nombre deseado
        final_path = OUTPUT_FOLDER / f"{filename}.mp3"

        if not os.path.exists(downloaded_file):
            logger.warning(f"Archivo no encontrado: {downloaded_file}")
            return None

        os.rename(downloaded_file, final_path)
        return str(final_path) if os.path.exists(final_path) else None

    except yt_dlp.utils.DownloadError as e:
        logger.warning(f"Error en la descarga: {e}")
        return None


def delete_file(file_path: str):
    """Elimina solo el archivo descargado sin borrar la carpeta ni archivos temporales."""
    try:
        if os.path.exists(file_path):
            os.remove(file_path)  # Borra solo el archivo de música final
            logger.info(f"Archivo eliminado: {file_path}")
        else:
            logger.info(f"El archivo no existe: {file_path}")
    except Exception as e:
        logger.exception(f"Error al eliminar el archivo: {e}")
