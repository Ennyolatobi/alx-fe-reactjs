import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">My Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
            <button
              onClick={() => removeFavorite(recipe.id)}
              className="text-red-500 hover:underline"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
