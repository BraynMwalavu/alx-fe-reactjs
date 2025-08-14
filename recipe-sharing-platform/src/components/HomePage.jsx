import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Recipe Home</h1>
        <Link to="/add-recipe" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;