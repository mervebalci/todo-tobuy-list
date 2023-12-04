import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const[list, setList] = useState([]);
  const[category, setCategory] = useState("task");

  function addTaskOrItem() {
    const userInput = document.getElementById('userInput').value;

    const data = {id: counter, name: userInput, category: category};

    setList([...list, data]);

    counter = counter + 1;

    document.getElementById('userInput').value = "";
  }

  function showTaskOrItem(category) {
    setCategory(category);
  }
 
  return (
    <div className="App">
      <h1>TO DO/BUY LIST</h1>
      <div>
        <input id="userInput" placeholder={"Add a new " + category}></input>
        <button id="addTask" onClick={addTaskOrItem}>Add</button>
      </div>
      <div>
        <button id="showTask" onClick={() => showTaskOrItem("task")}>To Do List</button>
        <button id="showItem" onClick={() => showTaskOrItem("item")}>To Buy List</button>
      </div>
      <TodoList list={list} setList={setList} category={category} />
    </div>
  );
}

function TodoList({ list, setList, category }) {
  function removeTaskorItem(id) {
    let remainingTasksOrItems = list.filter((taskOrItem) => {
      return taskOrItem.id !== id;
    })
    setList(remainingTasksOrItems)
  }
  return (
    <ul className="todoList">
      {list.map((listItem) => {
        if (listItem.category === category || category === "") {
          return (
            <li key={listItem.id} className="task">
              <button className="checkbox" id={listItem.id} onClick={() => removeTaskorItem(listItem.id)}></button>
              <span>{listItem.name}</span>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  )
}