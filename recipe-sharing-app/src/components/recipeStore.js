import create from "zustand";

// Zustand store for recipes
export const useRecipeStore = create((set) => ({
  recipes: [], // initial list of recipes
  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  // Action to initialize/set recipes
  setRecipes: (recipes) => set({ recipes }),
}));
