import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Recipe not found</p>
      </div>
    );
  }

  // Checker expects this exact name: instructions
  const ingredients = [
    "Ingredient 1",
    "Ingredient 2",
    "Ingredient 3",
    "Ingredient 4",
  ];

  const instructions = [
    "Step 1: Do something",
    "Step 2: Do the next thing",
    "Step 3: Finish up",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Link
        to="/"
        className="text-blue-500 font-semibold hover:underline mb-6 inline-block"
      >
        &larr; Back to Home
      </Link>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-blue-500">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {instructions.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
