import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const removeRecipe = useRecipeStore((state) => state.removeRecipe);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeRecipe(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
