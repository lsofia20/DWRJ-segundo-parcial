import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMealById } from "../services/mealtService";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    FetchMealById(mealId)
      .then((data) => {
        setMeal(data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles de la comida:", error);
      });
  }, [mealId]);

  if (!meal) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      {/*  */}
    </div>
  );
};

export default MealDetails;
