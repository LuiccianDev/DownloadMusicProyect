# DownloadMusic

## Descripción
Este proyecto permite a los usuarios descargar música desde diversas fuentes de manera sencilla y eficiente.

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:
- **Python 3.8+**: Para ejecutar el backend.
- **Node.js 14+**: Para ejecutar el frontend.
- **Git**: Para clonar el repositorio.
- **Redis**: Para la gestión de tareas en segundo plano con Celery.

## Backend
El backend está desarrollado en Python y utiliza las siguientes tecnologías:
- **Flask**: Para la creación de la API REST.
- **SQLAlchemy**: Para la gestión de la base de datos.
- **Requests**: Para realizar solicitudes HTTP a las fuentes de música.
- **Celery**: Para la gestión de tareas en segundo plano.

### Funcionalidades del Backend
- Gestión de usuarios y autenticación.
- Búsqueda y descarga de música desde diferentes plataformas.
- Almacenamiento de información en una base de datos.
- Procesamiento de tareas en segundo plano para descargas.

## Frontend
El frontend está desarrollado utilizando las siguientes tecnologías:
- **React**: Para la creación de la interfaz de usuario.
- **Axios**: Para la comunicación con el backend.
- **Bootstrap**: Para el diseño responsivo y estilización.

### Funcionalidades del Frontend
- Interfaz intuitiva para buscar y descargar música.
- Visualización del historial de descargas.
- Gestión de la cuenta del usuario.

## Instalación
1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/DownloadMusic.git
   cd DownloadMusic
   ```

2. **Configura el Backend**:
   - Navega al directorio `backend`:
     ```bash
     cd backend
     ```
   - Crea y activa un entorno virtual:
     ```bash
     python -m venv venv
     source venv/bin/activate  # En Windows: venv\Scripts\activate
     ```
   - Instala las dependencias:
     ```bash
     pip install -r requirements.txt
     ```
   - Configura las variables de entorno necesarias (ver `README` en el directorio `backend`).

3. **Configura el Frontend**:
   - Navega al directorio `frontend`:
     ```bash
     cd ../frontend
     ```
   - Instala las dependencias:
     ```bash
     npm install
     ```
   - Inicia el servidor de desarrollo:
     ```bash
     npm start
     ```

4. **Inicia Redis y Celery**:
   - Asegúrate de que Redis esté en ejecución.
   - Inicia el worker de Celery desde el directorio `backend`:
     ```bash
     celery -A app.celery worker --loglevel=info
     ```

5. **Ejecuta la Aplicación**:
   - Inicia el servidor del backend desde el directorio `backend`:
     ```bash
     flask run
     ```
   - Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE). Siéntete libre de usarlo y modificarlo según tus necesidades.

