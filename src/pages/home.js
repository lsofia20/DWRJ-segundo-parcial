import React, { useEffect, useState } from "react";
import MealPreviwGrid from "../components/mealPreviwGrid/index";
import {
  FetchMealByFirstLetter,
  SearchMealByName,
} from "../services/mealtService";

function Home({ openMealDetails, searchResults }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Obtener las comidas (la lista principal o los resultados de búsqueda)
    if (searchResults && searchResults.length > 0) {
      // Verificar que searchResults no sea null ni undefined
      setMeals(searchResults);
    } else {
      FetchMealByFirstLetter()
        .then((data) => {
          setMeals(data);
        })
        .catch((error) => {
          console.error("Error al obtener las comidas:", error);
        });
    }
  }, [searchResults]);

  return (
    <div className="page">
      <MealPreviwGrid meals={meals} openMealDetails={openMealDetails} />
    </div>
  );
}

export default Home;
