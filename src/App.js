import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const[tasks, setTasks] = useState([]);

  function addTask() {
    const userInput = document.getElementById('userInput').value;

    const task = {id: counter, name: userInput};

    setTasks([...tasks, task]);

    counter = counter + 1;

    document.getElementById('userInput').value = "";
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="userInput" placeholder="Add a new to do"></input>
      <button onClick={addTask}>Add</button>
      <TodoList taskList={tasks} />
    </div>
  );
}

function TodoList({ taskList }) {
  console.log(taskList)
  return (
    <ul>
      {taskList.map((task) => 
        <li key={task.id}>
          <button id={task.id}></button>
          <span>{task.name}</span>
        </li>
      )}
    </ul>
  )
}