import React from "react";

export function CategoryList({ category, setSelectedCategory }) {
  function selectCategory(categoryName) {
    setSelectedCategory(categoryName)
    console.log(categoryName)
  }

  return (
    <ul className="categoryList">
      {category.map((categoryName) => 
        <li key={categoryName}>
          <button id="showCategory" onClick={() => selectCategory(categoryName)}>{categoryName} List</button>
        </li>
      )}
    </ul>
  )
}