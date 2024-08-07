import React, { useEffect, useState } from 'react'
import TodosHeader from './TodosHeader'
import TodosFooter from './TodosFooter'
import TodosForm from './TodosForm'
import TodosList from './TodosList'
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {

    const initialTask = { id: uuidv4(), title: "" , status: 'Todo' }
    const [task, setTask] = useState(initialTask)
    const [editTask, setEditTask] = useState(false)
    const [todoList, setTodoList] = useState([]);

    const handleOnTaskChange = (e) => {
        const { value } = e.target;
        setTask({...task, title: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newTodoList = [...todoList, task];
        setTodoList(newTodoList)
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        setTask(initialTask) // Resetting the value of task
        if (editTask) {

          // Shallow Copy
          const filteredItems = todoList.slice();

          // Finding the index of the object / item / task
          const indexOfEdit = todoList.findIndex(item => item.id === task.id);
          
          // Replacing the item
          filteredItems[indexOfEdit] = task;

          // Updating this inside thestate and the localstorage.
          setTodoList(filteredItems)
          localStorage.setItem('todoList', JSON.stringify(filteredItems))

          // Updating the edit state
          setEditTask(false);
          
        }
    }

    useEffect(() => {
      const todoListLS = localStorage.getItem('todoList');
      if (todoListLS) {
        const todoListLSArr = JSON.parse(todoListLS)
        setTodoList(todoListLSArr)
      }
    }, [])


    const handleOnDelete = (item) => {
      const filteredItems = todoList.filter((task) => task.id !== item.id);
      setTodoList(filteredItems)
      localStorage.setItem('todoList', JSON.stringify(filteredItems))
    }

    const handleOnEdit = (item) => {
      setEditTask(true)
      setTask(item);
    }

    const handleOnComplete = (task) => {
      // Shallow Copy
      const filteredItems = todoList.slice();

      // Finding the index of the object / item / task
      const indexOfEdit = todoList.findIndex(item => item.id === task.id);
      
      // Replacing the item
      filteredItems[indexOfEdit] = {...task, status: "Completed"};

      // Updating this inside thestate and the localstorage.
      setTodoList(filteredItems)
      localStorage.setItem('todoList', JSON.stringify(filteredItems))
    }

    console.log('test_debug', todoList)

  return (
    <div>
        <TodosHeader />
        
        <TodosForm 
          onSubmit={handleOnSubmit} 
          task={task} 
          onChange={handleOnTaskChange}
        />

        <TodosList 
          list={todoList} 
          onDelete={handleOnDelete} 
          onEdit={handleOnEdit} 
          onComplete={handleOnComplete}  
        />
        
        <TodosFooter />
    </div>
  )
}

export default Todos
