# DownloadMusic

## Descripción
<<<<<<< HEAD
Este proyecto permite a los usuarios descargar música desde diversas fuentes de manera sencilla y eficiente.

## Backend
El backend está desarrollado en Python y utiliza las siguientes tecnologías:
- **Flask**: Para la creación de la API REST.
- **SQLAlchemy**: Para la gestión de la base de datos.
- **Requests**: Para realizar solicitudes HTTP a las fuentes de música.
- **Celery**: Para la gestión de tareas en segundo plano.
=======
Este proyecto permite a los usuarios descargar música desde diversas fuentes de manera sencilla y eficiente. Está diseñado para ser fácil de usar, con una interfaz intuitiva y un backend robusto que garantiza un rendimiento óptimo.

### Vista Previa
A continuación, se muestra una vista previa de la interfaz del proyecto:

![Vista previa del proyecto](frontend/assets/ResultProject.webp)

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:
- **Python 3.8+**: Para ejecutar el backend.
- **Node.js 14+**: Para ejecutar el frontend.
- **Git**: Para clonar el repositorio.
- **Redis**: Para la gestión de tareas en segundo plano con Celery.

## Backend
El backend está desarrollado en Python y utiliza tecnologías modernas para garantizar escalabilidad y seguridad. Además de las funcionalidades básicas, el backend incluye:
- **Validación de datos**: Para garantizar la integridad de la información.
- **Gestión de errores**: Manejo adecuado de errores para mejorar la experiencia del usuario.
- **Soporte para múltiples plataformas**: Permite la integración con diversas fuentes de música.
>>>>>>> inproved-code

### Funcionalidades del Backend
- Gestión de usuarios y autenticación.
- Búsqueda y descarga de música desde diferentes plataformas.
- Almacenamiento de información en una base de datos.
- Procesamiento de tareas en segundo plano para descargas.

## Frontend
<<<<<<< HEAD
El frontend está desarrollado utilizando las siguientes tecnologías:
- **React**: Para la creación de la interfaz de usuario.
- **Axios**: Para la comunicación con el backend.
- **Bootstrap**: Para el diseño responsivo y estilización.
=======
El frontend ofrece una experiencia de usuario fluida y atractiva. Está diseñado para ser responsivo y accesible desde cualquier dispositivo. Además de las funcionalidades básicas, incluye:
- **Notificaciones en tiempo real**: Para informar al usuario sobre el progreso de las descargas.
- **Filtros avanzados**: Para refinar las búsquedas de música.
- **Soporte multilenguaje**: Permite cambiar el idioma de la interfaz.
>>>>>>> inproved-code

### Funcionalidades del Frontend
- Interfaz intuitiva para buscar y descargar música.
- Visualización del historial de descargas.
- Gestión de la cuenta del usuario.

## Instalación
<<<<<<< HEAD
1. Clona este repositorio.
2. Configura el entorno virtual para el backend y las dependencias del frontend.
3. Sigue las instrucciones específicas en los directorios `backend` y `frontend`.
=======
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
>>>>>>> inproved-code

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

<<<<<<< HEAD
=======
## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE). Siéntete libre de usarlo y modificarlo según tus necesidades.

>>>>>>> inproved-code
