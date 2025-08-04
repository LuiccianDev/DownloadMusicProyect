<div align="center">
  <h1>🎵 DownloadMusic Project 🎵</h1>


<p >
  <em>Potente aplicación web para descargar música de YouTube de forma sencilla y rápida.</em>
</p>

  [![Python Version](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-brightgreen)](https://modelcontextprotocol.io)
  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?logo=fastapi)](https://fastapi.tiangolo.com/)
  [![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

</Div>

Aplicación web full-stack que permite a los usuarios convertir y descargar videos de YouTube a formato MP3 de manera programática a través de una API RESTful y una interfaz de usuario intuitiva.

---

## 📋 Tabla de Contenidos

- [Características Principales](#-características-principales)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Cómo Empezar](#-cómo-empezar)
- [Contribuciones](#-contribuciones)

## Características Principales

- **Conversión Rápida:** Descarga y convierte videos de YouTube a MP3.
- **Interfaz Moderna:** Frontend reactivo y fácil de usar construido con React y Vite.
- **Backend Robusto:** API potente y escalable desarrollada con FastAPI.
- **Calidad de Código:** Formateo consistente con Black y Prettier.
- **Gestión de Paquetes:** Dependencias manejadas con `uv` para el backend y `npm` para el frontend.

## Estructura del Proyecto

El proyecto se divide en dos componentes principales:

- **`./frontend`**: Contiene la aplicación de React que proporciona la interfaz de usuario. Para más detalles, consulta el [README de Frontend](./frontend/README.md).
- **`./backend`**: Contiene la aplicación de FastAPI que gestiona la lógica de descarga. Para más detalles, consulta el [README de Backend](./backend/README.md).

## Cómo Empezar

Para ejecutar este proyecto, necesitarás tener Node.js y Python (con `uv`) instalados.

### Frontend

1.  Navega al directorio `frontend`.
2.  Instala las dependencias: `npm install`.
3.  Inicia el servidor de desarrollo: `npm run dev`.

### Backend

1.  Navega al directorio `backend`.
2.  Crea y activa un entorno virtual.
3.  Instala las dependencias: `uv pip install -r requirements.txt`.
4.  Inicia el servidor: `uvicorn app.main:app --reload`.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.