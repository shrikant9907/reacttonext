import React from 'react'

const TodosForm = ({ task, onChange, onSubmit }) => {
  return (
    <div className='px-4 py-4 bg-gray-50 mb-4 border-b'>
        <form onSubmit={onSubmit}>
          <input
            className='p-3 mb-2 border w-full focus:outline-none'
            type='text'
            value={task.title}
            onChange={(e) => onChange(e)}
            placeholder='Enter your task'
            />
            <button className='p-2 bg-blue-500 text-white text-sm'>Save</button>
        </form>
    </div>
  )
}

export default TodosForm
