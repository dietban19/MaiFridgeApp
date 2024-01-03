import React from "react";
import "./landingComponent.scss";
import ArtRecipe from "../../assets/article-recipe.jpg";
import Data from "../../data/pop-recipes.json";
const RecipeLanding = () => {
  return (
    <div className="recipe-landing-wrapper">
      <div className="recipe-landing-container paddingsPrimary flex">
        <div className="recipes-article flexCol">
          <img src={ArtRecipe} />
          <div className="secondaryHeader">Top 10 Recipes You Need to Try</div>
        </div>
        <div className="popular-recipes">
          <div className="babyHeader">Popular Recipes</div>
          <div className="popular-recipes-list flexCol">
            {Data.map((recipe, index) => (
              <div className="popular-recipe-container flex" key={index}>
                <img src={recipe.image} loading="lazy" />
                <div className="popular-recipe-desc flexCol">
                  <div className="popular-recipe-name">{recipe.name}</div>
                  <div className="popular-recipe-category">
                    {recipe.category}
                  </div>
                  <div className="popular-recipe-stars">{recipe.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeLanding;
