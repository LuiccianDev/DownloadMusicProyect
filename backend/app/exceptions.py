"""
Excepciones personalizadas para la aplicación de descarga de música.
"""


class DownloadError(Exception):
    """Clase base para todas las excepciones relacionadas con la descarga."""

    pass


class InvalidURLError(DownloadError):
    """Lanzada cuando la URL de YouTube no es válida o es una lista de reproducción."""

    pass


class FFmpegError(DownloadError):
    """Lanzada cuando ffmpeg no está instalado o no se encuentra en el PATH."""

    pass


class DownloadServiceError(DownloadError):
    """Lanzada cuando ocurre un error durante el proceso de descarga con yt-dlp."""

    pass
