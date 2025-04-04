from pydantic import BaseModel, Field


class RequestDownload(BaseModel):
    url: str = Field(
        ..., title="URL de la música", description="Enlace del video a descargar"
    )
    filename: str = Field(
        ...,
        title="Nombre del archivo",
        description="Nombre deseado para la descarga (sin extensión)",
    )


class ResponseDownload(BaseModel):
    message: str = Field(
        default="Descarga completada", description="Mensaje de estado de la descarga"
    )
