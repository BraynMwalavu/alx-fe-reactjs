import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="section-spacing">
      <h2 className="section-title">{recipe.title}</h2>
      <p className="paragraph">{recipe.instructions}</p>

      <Link to={`/edit/${recipe.id}`} className="button-secondary">
        Edit Recipe
      </Link>
    </div>
  );
};

export default RecipeDetails;
