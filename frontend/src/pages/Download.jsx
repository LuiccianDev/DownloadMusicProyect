import React, { useState } from "react";
import { downloadMusic } from "../services/DownloadServicesApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importar estilos de toastify
import ErrorIcon from "../assets/icons_error.png"
import SuccessIcon from "../assets/sucess_icon.png"
import WarningIcon from "../assets/warning_icon.png"
import SpinnerLoader from "../components/SpinnerLoader";
// Configuración centralizada de estilos para los toasts
const toastConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  icon: ({ type }) => {
    const icons = {
      success: <img src={SuccessIcon} className="w-6 h-6 icon-white" alt="Success" />,
      warning: <img src={WarningIcon} className="w-6 h-6 icon-white" alt="Warning" />,
      error: <img src={ErrorIcon} className="w-6 h-6 icon-white" alt="Error" />,
    };
    return icons[type] || null;
  },
  className: "!rounded-lg !font-semibold !min-w-[300px] ",
  bodyClassName: "ml-2",
};

export default function Download() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [filename, setFilename] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!downloadUrl) {
      toast.warning("Por favor ingrese la URL del video", toastConfig);
      return false;
    }
    if (!filename) {
      toast.warning("Por favor ingrese un nombre para el archivo", toastConfig);
      return false;
    }
    return true;
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    
    toast.info("Iniciando descarga...", {
      ...toastConfig,
      autoClose: 2000,
      className: `${toastConfig.className} !bg-gradient-to-r from-purple-600 to-pink-600`,
    });

    try {
      await downloadMusic(downloadUrl, filename);
      toast.success("Descarga completada con éxito!", {
        ...toastConfig,
        className: `${toastConfig.className} !bg-gradient-to-r from-green-500 via-green-600 to-green-700`,
      });
      setDownloadUrl("");
      setFilename("");
    } catch (error) {
      toast.error("Error en la descarga. Intente nuevamente", {
        ...toastConfig,
        className: `${toastConfig.className} !bg-gradient-to-r from-red-500 via-red-600 to-red-700`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="download-container">
      <ToastContainer
        {...toastConfig}
        toastStyle={{
          backgroundColor: "rgb(30 41 59)",
          border: "1px solid rgb(51 65 85)",
        }}
        progressStyle={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
        }}
      />

      <div className="download-form-container">
        <h1 className="download-title">
          Download Music 
        </h1>

        <form className="download-form" onSubmit={handleDownload}>
          <div className="space-y-2">
            <label className="download-label">URL</label>
            
            <input
              className="download-input"
              type="text"
              placeholder='https://example.com/video'
              value={downloadUrl}
              onChange={(e) => setDownloadUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="download-label">File Name</label>
            <input
              className="download-input"
              type="text"
              placeholder="my-awesome-song"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
          </div>

          <button
            className="download-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <SpinnerLoader/>
              </>
            ) : (
              "Download Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}