import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p className="text-gray-600 mt-4">No recipes added yet.</p>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="p-4 border rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p className="text-gray-700 mb-2">{recipe.description}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
