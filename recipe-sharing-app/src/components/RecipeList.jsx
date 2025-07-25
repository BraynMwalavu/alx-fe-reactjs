import { Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="section-spacing">
      <h2 className="section-title">Recipe List</h2>
      <ul className="list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="list-item">
            <Link to={`/recipe/${recipe.id}`} className="link">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
