import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  currentRecipe: null, // ✅ For edit context

  // Search and filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Set current recipe (for editing)
  setCurrentRecipe: (recipe) => set({ currentRecipe: recipe }),
  clearCurrentRecipe: () => set({ currentRecipe: null }),

  // Recipe management
  addRecipe: (recipe) =>
    set((state) => {
      const id = recipe.id || Date.now().toString(); // Ensures each recipe has a unique ID
      if (!recipe.id) {
        console.warn("⚠️ Recipe missing ID. Generated fallback ID:", id);
      }
      const newRecipe = { ...recipe, id };
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: updated,
      };
    }),

  updateRecipe: (updated) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updated.id ? updated : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
        currentRecipe: null, // ✅ Clear current after update
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
        favorites: state.favorites.filter(favId => favId !== id),
      };
    }),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock logic)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
