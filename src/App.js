import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  function addNewCategory() {
    const newCategory = document.getElementById('inputCategory').value;
    setCategory([...category, newCategory]);
    document.getElementById('inputCategory').value = "";
  }

  function addNewItem() {
    const userInput = document.getElementById('inputItem').value;
    const newItem = { id: counter, name: userInput, category: category };
    counter = counter + 1;
    setItems([...items, newItem]);
    document.getElementById('inputItem').value = "";
  }

  return (
    <div className="App">
      <h1>REMINDER</h1>
      <input id="inputCategory" placeholder="Create a new category"></input>
      <button id="addCategory" onClick={addNewCategory}>Add</button>
      {category &&
        <div>
          <CategoryList category={category} setCategory={setCategory} />
          <div>
            <input id="inputItem" placeholder="Add a new item"></input>
            <button id="addItem" onClick={addNewItem}>Add</button>
          </div>
          <ItemList items={items} setItems={setItems} category={category} />
        </div>
      }
    </div>
  );
}

function CategoryList({ category, setCategory }) {
  console.log(category)
  function selectCategory(categoryName) {
    let selectedCategory = category.filter((categ) =>{
      return categ === categoryName
    });
    setCategory(...category, selectedCategory)
    console.log(selectedCategory)
    console.log(category)
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

function ItemList({ items, setItems, category }) {
  function removeItem(id) {
    let remainingItems = items.filter((item) => {
      return item.id !== id;
    })
    setItems(remainingItems)
  }
  return (
    <ul className="itemList">
      {items.map((item) => {
        if (item.category === category || category === "") {
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