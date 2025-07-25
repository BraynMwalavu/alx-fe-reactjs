import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const {
    recipes,
    favorites,
    addFavorite,
    removeFavorite,
  } = useRecipeStore((state) => ({
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const recipe = recipes.find((r) => r.id === recipeId);
  const isFavorite = favorites.includes(recipeId);

  if (!recipe) return <p>Recipe not found.</p>;

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      <button onClick={toggleFavorite} style={{ marginBottom: '10px' }}>
        {isFavorite ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
