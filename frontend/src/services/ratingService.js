import Data from "../data/customers.json";
import { promedioEstrellas } from "../utils/ratingUtils";

export const getRatingData = () => {
    if (!Data.personajes || !Array.isArray(Data.personajes)) {
        throw new Error("Invalid JSON structure");
    }
    const puntajes = Data.personajes.map(personaje => personaje.puntuacion);
    const promedio = promedioEstrellas(puntajes);
    
    return { 
        promedio, 
        totalUsers: Data.personajes.length 
    };
};