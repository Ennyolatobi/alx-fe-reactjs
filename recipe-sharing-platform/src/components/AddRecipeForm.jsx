import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients are required (at least 2)";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";

    // Ensure ingredients has at least 2 items (comma-separated)
    if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please list at least 2 ingredients separated by commas";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Normally, here you'd post data to a server or add to state
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: instructions.split("\n").map((i) => i.trim()),
      });

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");

      // Navigate back to Home page (optional)
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-blue-500">Add New Recipe</h1>

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (separated by commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Instructions (separate steps with new lines)
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
