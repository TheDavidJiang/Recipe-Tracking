import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // recipes is an array of objects. use setRecipes to change the state
  // of recipes. By default it is an array with 2 items in it.
  const [recipes, setRecipes] = useState(RecipeData);
  console.log("recipes: ", recipes)


  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes)=>[...currentRecipes, newRecipe])
    console.log("recipes: ", recipes)
  }
  

  const deleteRecipe = (indexToDelete)=> setRecipes((currentRecipes)=>currentRecipes.filter((post, index)=> index !== indexToDelete))
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 style={{fontFamily: "Playfair Display SC", fontSize: 64, textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} setRecipes={setRecipes}/>
      
    </div>
  );
}

export default App;
