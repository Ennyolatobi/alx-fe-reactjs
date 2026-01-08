import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0)
    return <p>No recommendations yet. Favorite some recipes first!</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-green-500">
        Recommended for You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
