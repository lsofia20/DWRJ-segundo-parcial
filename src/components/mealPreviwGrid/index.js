import React from "react";
import { Link } from "react-router-dom";
import MealPreviw from "../mealPreview/index";

import "./index.css";

const MealPreviwGrid = ({ meals }) => {
  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
          <MealPreviw meal={meal} />
        </Link>
      ))}
    </div>
  );
};

export default MealPreviwGrid;
