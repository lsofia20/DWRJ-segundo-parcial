import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/index";
import SearchBox from "./components/searchBox/index";
import Home from "./pages/home";
import MealDetails from "./pages/MealDetails";
import { SearchMealByName } from "./services/mealtService";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const openMealDetails = (meal) => {
    setSelectedMeal(meal);
    navigateTo("mealDetails");
  };

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const results = await SearchMealByName(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  let content = null;

  if (currentPage === "home") {
    content = (
      <Home
        openMealDetails={openMealDetails}
        searchResults={searchResults} // Pasa los resultados de búsqueda a la página Home
      />
    );
  } else if (currentPage === "mealDetails") {
    content = <MealDetails meal={selectedMeal} />;
  }

  return (
    <div className="App">
      <Navbar navigateTo={navigateTo}>
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </Navbar>
      {content}
    </div>
  );
}

export default App;
