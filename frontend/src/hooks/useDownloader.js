import { useState } from "react";
import { downloadMusic } from "../services/downloadService";
import { toast } from "react-toastify";
import { toastConfig } from "../components/toast/toastConfig.jsx";

export const useDownloader = () => {
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
      className: `${toastConfig.className} !bg-gradient-to-r from-purple-500 to-purple-700`,
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
      console.error("Error en la descarga:", error);
      toast.error("Error en la descarga. Intente nuevamente", {
        ...toastConfig,
        className: `${toastConfig.className} !bg-gradient-to-r from-red-500 via-red-600 to-red-700`,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    downloadUrl,
    setDownloadUrl,
    filename,
    setFilename,
    loading,
    handleDownload,
  };
};
