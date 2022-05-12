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

  const handleSubmit = (event)=>{
    event.preventDefault()

    createRecipe(formData)
    console.log("formData: ", formData)
    setFormData({...initialFormState})
  }

  const handleChange = ( { target} ) =>{
    const value = target.value
    console.log("value: ", value)
    setFormData({...formData, [target.name]: value})
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>

            <td><input name="name" type="text" required="required" placeholder="Name" onChange={handleChange} value={formData.name}></input></td>
            <td><input name="cuisine" type="text" required="required" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}></input></td>
            <td><input name="photo" type="url" required="required"  placeholder="URL" onChange={handleChange} value={formData.url}></input></td>
            <td><textarea name="ingredients" required="required"  type="text" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" required="required"  type="text" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
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
