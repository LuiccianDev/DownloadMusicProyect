function promedioEstrellas(puntajes) {
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return 0;
    }

    const total = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = total / puntajes.length;

    return Math.round(promedio * 100) / 100; // Redondea a 2 decimales
}

function actualizarPuntuacion(jsonData) {
    if (!jsonData.personajes || !Array.isArray(jsonData.personajes)) {
        throw new Error("Invalid JSON structure");
    }
    const puntajes = jsonData.personajes.map(personaje => personaje.puntuacion);
    const promedio = promedioEstrellas(puntajes);
    jsonData.promedio = promedio;; // Update the promedio field in the JSON object


    return promedio; // Return updated promedio
}

export { actualizarPuntuacion };
