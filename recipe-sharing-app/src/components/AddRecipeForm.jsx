import { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !instructions) return;
    addRecipe({ title, instructions });
    setTitle('');
    setInstructions('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Instructions"
        className="textarea"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />

      <button className="button-primary" type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
