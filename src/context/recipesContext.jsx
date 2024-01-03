import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

// Create a context for managing Recipes information
export const RecipesContext = React.createContext();

// Custom hook to access the RecipesContext
export function useRecipes() {
  return useContext(RecipesContext);
}

// Provider component to wrap the application and provide Recipes context
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [myRecipe, setMyRecipe] = useState([]);
  const apiKey = import.meta.env.VITE_SPOONACULAR_KEY; // Replace with your API key
  const fetchRecipesByRecipeName = useCallback(async (recipeName) => {
    console.log("calling", recipeName);
    setLoading(true);
    setError(null);
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setSearchedRecipes(data.results); // Note: The structure of the response might be different
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const fetchMyRecipes = useCallback(async (recipeName) => {
    console.log("calling", recipeName);
    setLoading(true);
    setError(null);
    const url = `www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setMyRecipe(data); // Note: The structure of the response might be different
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRecipes = async (ingredients) => {
    console.log("fetching ingredient, " + ingredients);
    setLoading(true);
    setError(null);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const values = {
    recipes,
    loading,
    error,
    fetchRecipes,
    searchedRecipes,
    fetchRecipesByRecipeName,
    myRecipe,
    fetchMyRecipes,
  };

  // Provider component wrapping children with the Recipes context
  return (
    <RecipesContext.Provider value={values}>{children}</RecipesContext.Provider>
  );
};
