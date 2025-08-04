import { useState, useEffect } from "react";
import { getRatingData } from "../services/ratingService";

export const useRating = () => {
  const [rating, setRating] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const { promedio, totalUsers } = getRatingData();
    setRating(promedio);
    setLength(totalUsers);
  }, []);

  return { rating, length };
};
