import React, { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore'; 

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
    />
  );
};

export default SearchBar;
