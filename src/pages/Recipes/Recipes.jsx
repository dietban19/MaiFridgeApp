import React, { useEffect } from "react";
import "./recipes.scss";
import TopHeader from "../../component/TopHeader/TopHeader";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useRecipes } from "../../context/recipesContext";
import { useParams } from "react-router-dom";
const Recipes = () => {
  const { search } = useParams();
  const {
    fetchRecipes,
    recipes,
    loading,
    error,
    api,
    searchedRecipes,
    fetchRecipesByRecipeName,
    myRecipe,
    fetchMyRecipes,
  } = useRecipes();

  // useEffect(() => {
  //   if (search) {
  //     fetchRecipes(search);
  //   }
  // }, [search]);
  function showRecipes() {
    if (loading) console.log("Loading");
    if (error) console.log("error", error);
    console.log(myRecipe);
  }
  return (
    <div className="recipes-wrapper">
      Recipe
      {search ? "seach" : "none"}
      <button
        onClick={() => {
          fetchMyRecipes(search);
        }}
      >
        Fetch
      </button>
      <button onClick={showRecipes}>Show</button>
      <div className="searched-recipes-list">
        {/* {recipes.map((recipe, index) => (
          <div className="searched-recipe-container" key={index}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Recipes;
