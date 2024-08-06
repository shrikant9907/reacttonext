import React from 'react'

const TodosList = ({list}) => {
  return (
    <div className='px-4'>
        <h3 className='mb-2 font-bold'>Task List:</h3>
        <ul>
          {list && list.map((item) => {
            return <li className='border-t p-2'>{item.title}</li> 
          })}
          
        </ul>
    </div>
  )
}

export default TodosList
