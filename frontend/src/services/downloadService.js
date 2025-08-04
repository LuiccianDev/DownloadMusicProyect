export const downloadMusic = async (url, filename) => {
  try {
    const response = await fetch("http://localhost:8000/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, filename }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Captura el error del backend
      throw new Error(`Error en la descarga: ${errorText}`);
    }

    // ✅ Verificar si la respuesta es un archivo
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("audio/mpeg")) {
      throw new Error("El servidor no devolvió un archivo de audio.");
    }

    // Convertir la respuesta en un Blob y crear el enlace de descarga
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error al descargar:", error.message);
    //alert(`Error: ${error.message}`); // ✅ Mostrar error en pantalla
    throw error;
  }
};
