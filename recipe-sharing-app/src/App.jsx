import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './stores/recipeStore';
import './App.css';

// ✅ Wrapper to extract the ID from the URL and pass the recipe to EditRecipeForm
const EditPageWrapper = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === id)
  );

  if (!recipe) return <p>Loading recipe details...</p>;

  return <EditRecipeForm recipe={recipe} />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-box">
          <h1 className="app-title">🍲 Zustand Recipe App</h1>

          <SearchBar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditPageWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
