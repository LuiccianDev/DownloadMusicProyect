export const promedioEstrellas = (puntajes) => {
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return 0;
    }

    const total = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = total / puntajes.length;

    return Math.round(promedio * 100) / 100; // Redondea a 2 decimales
}
