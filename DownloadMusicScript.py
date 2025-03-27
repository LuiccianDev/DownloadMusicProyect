""" Inportar modulo de yt-dlp """

import yt_dlp


Path = "directorio de descarga de musica"
def descargar_musica(url):
    output = Path
    # Configuración de yt-dlp para descargar solo el audio en mejor calidad
    ydl_opts = {
        'format': 'bestaudio/best',
        'extractaudio': True,  # Extraer solo audio
        'audioformat': 'mp3',  # Convertir a mp3
        'outtmpl': f'{output}/%(title).50s.%(ext)s',  # Definir la ruta y el nombre del archivo
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',  # Usar FFmpeg para convertir
            'preferredcodec': 'mp3',        # Formato de salida (MP3)
            'preferredquality': '192',      # Calidad del MP3
        }],
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        # Descargar y convertir el audio
        ydl.download([url])

if __name__ == "__main__":
    # URL del video o música de YouTube que deseas descargar
    url = "https://www.youtube.com/watch?v=lxosIG5yeEE"
    descargar_musica(url)
    print("Descarga Finalizada")

