import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  // add a new recipe object { id, title, description, ingredients?, time? }
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // set initial recipes list (replace)
  setRecipes: (recipes) => set({ recipes }),

  // optional: helper to get recipe by id
  getRecipeById: (id) => get().recipes.find(r => r.id === id),
}));
