import pathlib
import re
import shutil

import yt_dlp

from app.exceptions import DownloadServiceError, FFmpegError, InvalidURLError
from app.utils.logger_utils import logger

# Carpeta donde se guardarán los archivos temporalmente
OUTPUT_FOLDER = pathlib.Path("app/temp")

# Asegurarse de que la carpeta de salida exista
OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)


def check_ffmpeg_installed():
    """Verifica si ffmpeg está instalado. Lanza FFmpegError si no se encuentra."""
    if shutil.which("ffmpeg") is None:
        logger.error("ffmpeg no se encontró en el PATH.")
        raise FFmpegError("ffmpeg no está instalado o no se encuentra en el PATH.") 


def validar_url(url: str):
    """Valida la URL de YouTube. Lanza InvalidURLError si no es válida."""
    patron_url = r"^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$"
    if not re.match(patron_url, url):
        raise InvalidURLError("La URL proporcionada no es válida.")
    if "&list=" in url:
        raise InvalidURLError("No se permiten listas de reproducción en la URL.") 


def descargar_musica(url: str, filename: str) -> pathlib.Path:
    """
    Descarga música de YouTube y la guarda como MP3.

    Raises:
        InvalidURLError: Si la URL no es válida.
        FFmpegError: Si ffmpeg no está instalado.
        DownloadServiceError: Si ocurre un error durante la descarga.
    """
    validar_url(url)
    check_ffmpeg_installed()

    final_path = OUTPUT_FOLDER / f"{filename}.mp3"

    ydl_opts = {
        "format": "bestaudio/best",
        "extractaudio": True,
        "audioformat": "mp3",
        "outtmpl": str(final_path),
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }
        ],
        "quiet": True,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])

        if not final_path.exists():
            raise DownloadServiceError("El archivo no se creó después de la descarga.")

        logger.info(f"Música descargada y guardada en: {final_path}")
        return final_path

    except yt_dlp.utils.DownloadError as e:
        logger.error(f"Error al descargar con yt-dlp: {e}")
        raise DownloadServiceError(f"No se pudo descargar la música: {e}") from e


def delete_file(file_path: pathlib.Path):
    """Elimina el archivo descargado de forma segura."""
    try:
        if file_path.exists():
            file_path.unlink()
            logger.info(f"Archivo eliminado: {file_path}")
        else:
            logger.warning(f"Se intentó eliminar un archivo que no existe: {file_path}")
    except Exception as e:
        logger.exception(f"Error al eliminar el archivo {file_path}: {e}")
