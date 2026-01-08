import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
        Recipe Sharing App
      </h1>

      {/* Add Recipe Form */}
      <AddRecipeForm />

      {/* Recipe List */}
      <RecipeList />
    </div>
  );
}

export default App;
