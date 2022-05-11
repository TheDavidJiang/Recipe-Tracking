import React from "react"

function Recipe({recipe, index, deleteRecipe}){
    return (
        <>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt=""/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            
      </>
    )
}

export default Recipe