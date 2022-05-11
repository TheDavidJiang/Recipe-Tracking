import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "", 
    ingredients: "", 
    preparation: ""
  }
  const [formData, setFormData] = useState({...initialFormState})

  // const [name, setName] = useState("")
  // const [cuisine, setCuisine] = useState("")
  // const [url, setUrl] = useState("")
  // const [ingredients, setIngredients] = useState("")
  // const [preparation, setPreparation] = useState("")

  const handleSubmit = (event)=>{
    event.preventDefault()
    // create a new recipe
    createRecipe(formData)//finish later
    console.log("formData: ", formData)
    setFormData({...initialFormState})
  }

  const handleChange = ( { target} ) =>{
    const value = target.value
    console.log("value: ", value)
    setFormData({...formData, [target.name]: value})//setSomething = value
  }

  // const handleFormChange = (event)=>


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>

            <td><input name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name}></input></td>
            <td><input name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}></input></td>
            <td><input name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.url}></input></td>
            <td><textarea name="ingredients" type="text" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" type="text" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
