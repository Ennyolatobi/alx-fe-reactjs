import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Optional: initialize with mock recipes
  useEffect(() => {
    const initialRecipes = [
      { id: 1, title: "Spaghetti Carbonara", description: "Classic Italian pasta." },
      { id: 2, title: "Chicken Tikka Masala", description: "Spicy and creamy." },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Recipe Sharing App
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
