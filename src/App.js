import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const[list, setList] = useState([]);
  const[category, setCategory] = useState("");

  function addTaskOrItem(category) {
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
        <input id="userInput" placeholder="Add a new to do/buy..."></input>
        <button id="addTask" onClick={() => addTaskOrItem("task")}>To Do</button>
        <button id="addItem" onClick={() => addTaskOrItem("item")}>To Buy</button>
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
  function removeTask(id) {
    let remainingTasks = list.filter((task) => {
      return task.id !== id;
    })
    setList(remainingTasks)
  }
  return (
    <ul className="todoList">
      {list.map((listItem) => {
        if (listItem.category === category) {
          return (
            <li key={listItem.id} className="task">
              <button className="checkbox" id={listItem.id} onClick={() => removeTask(listItem.id)}></button>
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