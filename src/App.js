import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  function addNewCategory() {
    const creatingCategory = document.getElementById('category').value;
    setCategory([...category, creatingCategory])

    document.getElementById('category').value = "";

    console.log(category)
  }

  function addNewItem() {
    const userInput = document.getElementById('item').value;

    const item = { id: counter, name: userInput, category: category };

    setItems([...items, item]);

    counter = counter + 1;

    document.getElementById('item').value = "";
  }

  function showItem(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>REMINDER</h1>
      <input id="inputCategory" placeholder="Create a new category"></input>
      <button id="addCategory" onClick={addNewCategory}>Add</button>
      {category &&
        <div>
          <div>
            <input id="inputItem" placeholder="Add a new item"></input>
            <button id="addItem" onClick={addNewItem}>Add</button>
          </div>
          <div>
            <button id="showItem" onClick={() => showItem("item")}>To Buy List</button>
          </div>
          <ItemList items={items} setItems={setItems} category={category} />
        </div>
      }
    </div>
  );
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