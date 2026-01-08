import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (recipes.length === 0) return <p className="text-gray-600 mt-4">No recipes found.</p>;

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-500">{recipe.title}</h3>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
            <div className="flex justify-between items-center">
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
              <button
                onClick={() =>
                  isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
                }
                className={`px-2 py-1 rounded ${
                  isFavorite ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
                }`}
              >
                {isFavorite ? "Unfavorite" : "Favorite"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
