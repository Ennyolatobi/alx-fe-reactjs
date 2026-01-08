import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams(); // get id from route
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.description}</p>

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {isEditing ? "Close Edit" : "Edit"}
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>

      {isEditing && <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default RecipeDetails;
