import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  console.log("recipes: ", recipes)


  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes)=>[...currentRecipes, newRecipe])
    console.log("recipes: ", recipes)
  }
  

  const deleteRecipe = (indexToDelete)=> setRecipes((currentRecipes)=>currentRecipes.filter((post, index)=> index !== indexToDelete))


  
  return (
    <div className="App">
      <header><h1 style={{fontFamily: "Playfair Display SC", fontSize: 64, textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} setRecipes={setRecipes}/>
      
    </div>
  );
}

export default App;
