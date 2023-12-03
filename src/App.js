import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const[list, setList] = useState([]);

  function addTaskOrItem(category) {
    const userInput = document.getElementById('userInput').value;

    const data = {id: counter, name: userInput, category: category};

    setList([...list, data]);

    counter = counter + 1;

    document.getElementById('userInput').value = "";
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
        <button id="showTask">To Do List</button>
        <button id="showItem">To Buy List</button>
      </div>
      <TodoList taskList={list} setList={setList} />
    </div>
  );
}

function TodoList({ taskList, setList }) {
  function removeTask(id) {
    let remainingTasks = taskList.filter((task) => {
      return task.id !== id;
    })
    setList(remainingTasks)
  }
  return (
    <ul className="todoList">
      {taskList.map((task) => 
        <li key={task.id} className="task">
          <button className="checkbox" id={task.id} onClick={() => removeTask(task.id)}></button>
          <span>{task.name}</span>
        </li>
      )}
    </ul>
  )
}