import React, { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended For You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add some favorites first!</p>
      )}
    </div>
  );
}

export default RecommendationsList;
