import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Optional: handle undefined safely
  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          {/* Add more fields if needed */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
