import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom"; // ✅ Add useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ Redirect to home after deletion
  };

  return (
    <button
      onClick={handleDelete} // ✅ Use handleDelete function
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
