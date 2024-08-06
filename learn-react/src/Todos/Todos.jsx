import React, { useState } from 'react'
import TodosHeader from './TodosHeader'
import TodosFooter from './TodosFooter'
import TodosForm from './TodosForm'
import TodosList from './TodosList'
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {

    const initialTask = { title: "", id: uuidv4() }
    const [task, setTask] = useState(initialTask)
    const [todoList, setTodoList] = useState([]);

    const handleOnTaskChange = (e) => {
        const { value } = e.target;
        setTask({...task, title: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setTodoList([...todoList, task])
        setTask(initialTask) // Resetting the value of task
    }

    console.log('test_debug', todoList)

  return (
    <div>
        <TodosHeader />
        <TodosForm onSubmit={handleOnSubmit} task={task} onChange={handleOnTaskChange} />
        <TodosList list={todoList} />
        <TodosFooter />
    </div>
  )
}

export default Todos
