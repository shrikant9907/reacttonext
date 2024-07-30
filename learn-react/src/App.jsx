import { useState } from 'react'
import './App.css'  
import Modal from './components/Modal'

function App() {

  const [showModal, setShowModal] = useState(false)
 
  return (
    <>

    <button onClick={() => setShowModal(true)} className='bg-blue-700 text-white py-2 px-3 rounded'>Open Modal</button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

    <h3 className='font-bold text-lg mb-3'>Create a Modal | React + Tailwind</h3>
    <div className='text-sm text-gray-700'>You are watching this example on channel React To Next. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architectreprehenderit!</div>

    </Modal>
    </>
  )
}

export default App
