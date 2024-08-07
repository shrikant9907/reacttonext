import React from 'react'

const TodosList = ({list, onDelete, onEdit, onComplete}) => {
  return (
    <div className='px-4'>
        <h3 className='mb-2 font-bold'>Task List:</h3>
        <ul>
          {list && list.map((item) => {
            return <li className='border-t p-2 flex justify-between gap-3'>
             <div>
             <strong>{item.title}</strong> <br />
             <em className='border px-2 bg-blue-50 rounded-md'>{item.status}</em>
             </div>
              <div className='flex gap-3 justify-end'>
                <button onClick={() => onComplete(item)} className='bg-blue-500 p-2 py-1 text-white rounded-lg'>Mask As Completed</button>
                <button onClick={() => onEdit(item)} className='bg-blue-500 p-2 py-1 text-white rounded-lg'>Edit</button>
                <button onClick={() => onDelete(item)} className='bg-red-500 p-2 py-1 text-white rounded-lg'>Delete</button>
              </div>
            </li> 
          })}
          
        </ul>
    </div>
  )
}

export default TodosList
