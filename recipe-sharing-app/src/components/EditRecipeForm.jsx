import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === id)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setInstructions(recipe.instructions);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!title || !instructions) return;
    updateRecipe({ id: recipe.id, title, instructions });
    navigate('/');
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Edit Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title"
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Instructions"
        className="textarea"
        value={instructions}
        onChange={(event) => setInstructions(event.target.value)}
      />

      <button type="submit" className="button-primary">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
