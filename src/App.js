import './App.css';
import { useState } from 'react';
import { CategoryList } from './components/CategoryList.js';
import { ItemList } from './components/ItemList';

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
      <input type="text" id="inputCategory" placeholder="Create a new category"></input>
      <button type="submit" id="addCategory" onClick={addNewCategory}>Add</button>
      {category.length !== 0 &&
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