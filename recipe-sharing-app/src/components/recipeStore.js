import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update a recipe by id
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedData } : recipe
    )
  })),

  // Delete a recipe by id
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Get recipe by id
  getRecipeById: (id) => get().recipes.find(r => r.id === id),
}));
