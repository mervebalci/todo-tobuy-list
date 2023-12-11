import React from "react";

export function ItemList({ items, setItems, category, selectedCategory }) {
  function removeItem(id) {
    let remainingItems = items.filter((item) => {
      return item.id !== id;
    })
    setItems(remainingItems)
  }
  return (
    <ul className="itemList">
      {items.map((item) => {
        if (item.category === selectedCategory || category === "") {
          return (
            <li key={item.id} className="item">
              <button className="checkbox" id={item.id} onClick={() => removeItem(item.id)}></button>
              <span>{item.name}</span>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  )
}