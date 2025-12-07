import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newRecipe = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Recipe title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>
      <div style={{ marginTop: '8px' }}>
        <textarea
          value={description}
          placeholder="Short description"
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '8px', width: '300px', height: '80px' }}
        />
      </div>
      <button type="submit" style={{ marginTop: '8px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
