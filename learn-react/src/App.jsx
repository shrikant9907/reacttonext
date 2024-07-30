import { useState } from 'react'
import './App.css'  
import Modal from './components/Modal'

function App() {

  const [showModal, setShowModal] = useState(false)
 
  return (
    <>

    <button onClick={() => setShowModal(true)} className='bg-blue-700 text-white py-2 px-3 rounded'>Open Modal</button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

    <h3 className='font-bold text-lg mb-3'>Create a Modal | React + Tailwind | React To Next</h3>
    <div className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium ea itaque officiis earum eum recusandae nesciunt eaque dolore dolor, tempore nemo, aperiam optio explicabo expedita quo, rem eveniet reprehenderit!</div>

    </Modal>
    </>
  )
}

export default App
