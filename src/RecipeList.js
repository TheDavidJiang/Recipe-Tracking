import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index)=>(
              <tr>
                <Recipe recipe={recipe} index={index} />
                <td><button name="delete" onClick={()=>deleteRecipe(index)}>Delete</button></td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
