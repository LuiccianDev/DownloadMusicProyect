# React + Vite

Este proyecto utiliza React con Vite para proporcionar un entorno de desarrollo rápido y eficiente. A continuación, se detalla la estructura del proyecto, los pasos para instalar las dependencias y cómo inicializar el proyecto.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
frontend/
├── public/          # Archivos estáticos públicos
├── src/             # Código fuente del proyecto
│   ├── components/  # Componentes reutilizables de React
│   ├── pages/       # Páginas principales de la aplicación
│   ├── assets/      # Recursos como imágenes, estilos, etc.
│   ├── App.jsx      # Componente raíz de la aplicación
│   └── main.jsx     # Punto de entrada de la aplicación
├── .eslintrc        # Configuración de ESLint
├── vite.config.js   # Configuración de Vite
├── package.json     # Dependencias y scripts del proyecto
└── README.md        # Documentación del proyecto
```

## Instalación de Dependencias

Sigue estos pasos para instalar las dependencias necesarias:

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Abre una terminal y navega al directorio `frontend` del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Inicialización del Proyecto

Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y podrás acceder a la aplicación en tu navegador en `http://localhost:3000` (o el puerto que indique la terminal).

## Construcción para Producción

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

## Notas Adicionales

- Si necesitas instalar nuevas dependencias, utiliza `npm install <nombre-paquete>`.
- Para ejecutar pruebas (si están configuradas), utiliza `npm test`.

Para más información sobre Vite y React, consulta la [documentación oficial de Vite](https://vitejs.dev/) y [React](https://reactjs.org/).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
