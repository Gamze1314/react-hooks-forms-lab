import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // 1- add state on where you list items
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // define onSearchChange
  function handleSearch(event){
    setSearchText(event.target.value)
  }

const itemsToDisplay = items.filter((item) => {
  if (selectedCategory === "All" && searchText === "") {
    return true; // Show all items when no category is selected and no search text is entered
  }

  if (selectedCategory !== "All" && searchText === "") {
    return item.category === selectedCategory; // Only show items with the selected category when no search text is entered
  }

  if (selectedCategory === "All" && searchText !== "") {
    return item.name.toLowerCase().includes(searchText.toLowerCase()); // Only show items whose names contain the search text when no category is selected
  }

  return item.category === selectedCategory && item.name.toLowerCase().includes(searchText.toLowerCase()); // Show items with the selected category and whose names contain the search text
});

  // onSearchChange passed as prop to Filter comp.
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} /> 
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
