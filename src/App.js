import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title";
import ListItems from './components/List';
import CompletedTask from './components/CompletedTask';

const App = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskKey, setTaskKey] = useState("");
    const [items, setItems] = useState([]);
    const [completed, setCompleted] = useState([]);

  const saveTaskToLocalStorage = (items) => {
    localStorage.setItem('react-todos-app-tasks', JSON.stringify(items));
  }

  const saveCompletedToLocalStorage = (items) => {
    localStorage.setItem('react-todos-app-completed', JSON.stringify(items));
  }

  useEffect(() => {
    const todoTasks = JSON.parse(localStorage.getItem('react-todos-app-tasks'))
    if(todoTasks){
      setItems(todoTasks)
    }
  }, [])


  useEffect(() => {
    const completedTasks = JSON.parse(localStorage.getItem('react-todos-app-completed'))
    if(completedTasks){
      setCompleted(completedTasks)
    }
  }, [])

  const handleText = (e) => {
    const name = document.getElementById("name").value;
    setTaskName(name)
    setTaskKey(Date.now());
  }

  const handleDate = (e) => {
    const date = document.getElementById("date").value;
    setTaskDate(date)
  }

  const addTask = (e) => {
    e.preventDefault();
    const currentItem = [...items, {name:taskName, date:taskDate, key:taskKey}]
    setItems(currentItem);
    saveTaskToLocalStorage(currentItem);
    setTaskDate("");
    setTaskName("");
    setTaskKey("");

  }

  const deleteItem = (key) => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
    saveTaskToLocalStorage(filteredItems);
  }

  const undoItem = (key) =>{
    const selectedItem = completed.filter(item => item.key === key)[0];
    const currentItem = [...items, selectedItem]
    setItems(currentItem);
    deleteCompleted(key);
    saveCompletedToLocalStorage(currentItem);
  }

  const addToCompleted = (key) => {
    const selectedItem = items.filter(item => item.key === key)[0];
    deleteItem(key);
    const completedItems = [...completed, selectedItem];
    setCompleted(completedItems);
    saveCompletedToLocalStorage(completedItems);
  }

  const deleteCompleted = (key) => {
    const filteredItems = completed.filter(item => item.key !== key);
    setCompleted(filteredItems);
    saveCompletedToLocalStorage(filteredItems);
  }

  const sortName = items.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1
    } return 0 
  })

    return (
      <div className="App">
        <Header />
        <div className='main'>
          <p>Organize your task better</p>
          <Title title="New Task"/>
          <form action="" id="task-form" onSubmit={addTask}>
                  <label for="name" id="label-name">Task Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="New Activity" value={taskName} onChange={handleText} required={true}></input>
             
                  <label for="due-date" id="label-date">Due Date</label>
                  <input type="date" id="date" name="date" className="form-control" placeholder="02/12/21" value={taskDate} onChange={handleDate} required={true}></input>
              
              <button type="submit" value="Submit" className="submit-button">
                  <span className="add-icon">+</span>
                  <span className="add-text">Add Task</span>
              </button>
          </form>

          <hr></hr>

          <Title title="Task List"/>
          <ListItems items = {items} deleteItem = {deleteItem} addToCompleted = {addToCompleted}></ListItems>

          <hr></hr>

          <Title title="Completed"/>
          <CompletedTask items = {completed} deleteItem = {deleteCompleted} undoItem = {undoItem}/>
          {/* <button onClick={sortName}>sort</button> */}
        </div>
        
        
      </div>
    )
  }


export default App;
