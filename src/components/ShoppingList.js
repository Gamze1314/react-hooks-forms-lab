import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // 1- add state on where you list items
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }



  function handleForm(newItem) {
    const newData = [...items, newItem]
     setItems(newData)
    //  return <Item name={newItem.name} category={newItem.category}/>
    // display formData ??

  }


const itemsToDisplay = items.filter((item) => {
  if (selectedCategory === "All" && search === "") {
    return true; // Show all items when no category is selected and no search text is entered
  }

  if (selectedCategory !== "All" && search === "") {
    return item.category === selectedCategory; // Only show items with the selected category when no search text is entered
  }

  if (selectedCategory === "All" && search !== "") {
    return item.name.toLowerCase().includes(search.toLowerCase()); // Only show items whose names contain the search text when no category is selected
  }

  return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase()); // Show items with the selected category and whose names contain the search text
});

  // onSearchChange passed as prop to Filter comp.
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleForm} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} search={search} /> 
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
