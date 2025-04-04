from fastapi import APIRouter, BackgroundTasks
from fastapi.responses import FileResponse
from services.download_services import descargar_musica, delete_file
from schema.download_schema import RequestDownload

download_router = APIRouter()


@download_router.post("/download")
async def download(request: RequestDownload, background_tasks: BackgroundTasks):
    url = request.url
    filename = request.filename  # Obtener nombre del usuario

    # Descargar la música con el nombre personalizado
    file_path = descargar_musica(url, filename)

    if not file_path:
        return {"message": "Error al descargar la música"}

    # Función para eliminar el archivo después de enviarlo

    background_tasks.add_task(delete_file, file_path)

    # Enviar el archivo y eliminarlo después
    response = FileResponse(
        file_path, media_type="audio/mpeg", filename=f"{filename}.mp3"
    )

    return response
