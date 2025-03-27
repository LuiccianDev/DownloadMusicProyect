import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Estilos personalizados para cada tipo de notificación
const toastStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

// ✅ Componente de Notificación Personalizada
const CustomNotification = ({ closeToast, data, toastProps }) => {
  const { title, content, type } = data;
  const isColored = toastProps.theme === "colored";
  const bgClass = toastStyles[type] || "bg-gray-700 text-white"; // ✅ Estilo por defecto

  return (
    <div className={`flex flex-col w-full p-3 rounded-md ${bgClass}`}>
      <h3 className={`text-sm font-semibold ${isColored ? "text-white" : "text-gray-800"}`}>
        {title}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm">{content}</p>
        <button
          onClick={closeToast}
          className="ml-auto text-xs border rounded-md px-4 py-2 bg-white text-black active:scale-[.95]"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

// ✅ Función para disparar la notificación personalizada
export const showCustomToast = (type) => {
  toast(<CustomNotification />, {
    data: {
      title: type.toUpperCase() + " Notification",
      content: `This is a ${type} message.`,
      type, // ✅ Se usa para definir el estilo
    },
    progress: 0.2,
    autoClose: 3000,
    closeOnClick: true,
    theme: "dark",
  });
};

// ✅ Componente principal con botones para probar cada tipo de notificación
export default function CustomToastExample() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Custom Toast Example</h1>

      <div className="flex space-x-3">
        <button onClick={() => showCustomToast("success")} className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md text-white">
          Success
        </button>
        <button onClick={() => showCustomToast("error")} className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md text-white">
          Error
        </button>
        <button onClick={() => showCustomToast("warning")} className="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded-md text-black">
          Warning
        </button>
        <button onClick={() => showCustomToast("info")} className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white">
          Info
        </button>
      </div>
    </div>
  );
}

