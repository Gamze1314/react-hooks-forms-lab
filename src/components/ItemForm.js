import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import Item from "./Item";

// onChange handler that updates the passed value.
// onSubmit on form 
function ItemForm({ onItemFormSubmit }) {
  const [ name , setName ] = useState("")
  const [ category, setCategory ] = useState("Produce")



  // handle Form Submission 
function handleSubmit(e){
  e.preventDefault();
  //// Do something with the form data
  console.log(e)
    const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: name,
    category: category
  };
  console.group(newItem)
  
 onItemFormSubmit(newItem);

}

// make states to handle name/category for forms

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange={(e) => setCategory(e.target.value)} name="category" value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// add new item to the list when the form is submitted
// make all the input fields controlled
// access all the form data via state
// initial state for the select tag is  "Produce"
// handle the form submit event 
// update state with   const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id

//use prop called ' onItemFormSubmit' as a cb and pass new item to it.