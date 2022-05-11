import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked


  // have a .map to render the list of recipes
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
