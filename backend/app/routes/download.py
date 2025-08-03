from fastapi import APIRouter, BackgroundTasks, HTTPException
from fastapi.responses import FileResponse

from app.exceptions import DownloadServiceError, FFmpegError, InvalidURLError
from app.schema.download_schema import RequestDownload
from app.services.download_services import delete_file, descargar_musica
from app.utils.logger_utils import logger

download_router = APIRouter()


@download_router.post("/download")
async def download(request: RequestDownload, background_tasks: BackgroundTasks) -> FileResponse:
    try:
        file_path = descargar_musica(request.url, request.filename)

    except InvalidURLError as e:
        logger.warning(f"URL inválida: {e}")
        raise HTTPException(status_code=400, detail=str(e)) from e

    except FFmpegError as e:
        logger.error(f"Error de FFMpeg: {e}")
        raise HTTPException(status_code=500, detail=str(e)) from e

    except DownloadServiceError as e:
        logger.error(f"Error en el servicio de descarga: {e}")
        raise HTTPException(status_code=500, detail=str(e)) from e

    background_tasks.add_task(delete_file, file_path)

    return FileResponse(
        path=file_path,
        media_type="audio/mpeg",
        filename=f"{request.filename}.mp3",
    )
