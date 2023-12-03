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
    console.log(tasks)
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="userInput" placeholder="Add a new to do"></input>
      <button onClick={addTask}>Add</button>
    </div>
  );
}