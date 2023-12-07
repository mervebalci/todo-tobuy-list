import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

  function addNewCategory() {
    const newCategory = document.getElementById('inputCategory').value;
    setCategory([...category, newCategory]);
    document.getElementById('inputCategory').value = "";
  }

  function addNewItem(selectedCategory) {
    console.log(selectedCategory)
    const userInput = document.getElementById('inputItem').value;
    const newItem = { id: counter, name: userInput, category: selectedCategory };
    counter = counter + 1;
    setItems([...items, newItem]);
    document.getElementById('inputItem').value = "";
    console.log(items)
  }

  return (
    <div className="App">
      <h1>REMINDER</h1>
      <input id="inputCategory" placeholder="Create a new category"></input>
      <button id="addCategory" onClick={addNewCategory}>Add</button>
      {category &&
        <div>
          <CategoryList category={category} setSelectedCategory={setSelectedCategory} />
          <div>
            <input id="inputItem" placeholder="Add a new item"></input>
            <button id="addItem" onClick={() => addNewItem(selectedCategory)}>Add</button>
          </div>
          <ItemList items={items} setItems={setItems} category={category} selectedCategory={selectedCategory} />
        </div>
      }
    </div>
  );
}

function CategoryList({ category, setSelectedCategory }) {
  function selectCategory(categoryName) {
    let selectedCategory = category.filter((categ) => {
      return categ === categoryName
    });
    setSelectedCategory(selectedCategory)
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

function ItemList({ items, setItems, category, selectedCategory }) {
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