import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  // select only recipes to avoid rerenders from other properties
  const recipes = useRecipeStore(state => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <div>No recipes yet. Add one!</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
