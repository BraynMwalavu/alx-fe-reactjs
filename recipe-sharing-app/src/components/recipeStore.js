import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  removeRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),
}));

export default useRecipeStore;
