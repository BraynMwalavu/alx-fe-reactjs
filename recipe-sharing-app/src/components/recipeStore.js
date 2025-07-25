import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe], // update filtered too
    })),
  updateRecipe: (updated) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updated.id ? updated : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),
}));
