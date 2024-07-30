import React from 'react'

const Modal = ({isOpen, children, onClose}) => {

    if(!isOpen) return null;

  return (
    <div className='h-full w-full fixed flex items-center justify-center top-0 z-50'>

        {/* Overlay */}
        <div onClick={onClose} className="bg-black bg-opacity-60 fixed top-0 w-full bottom-0 cursor-pointer"></div>

        {/* Card  */}
        <div className='border rounded-lg bg-white p-4 shadow-lg relative md:w-1/2 w-full'>
        
        {/* Close Icon */}
        <div onClick={onClose} className='text-lg absolute top-0 right-3 cursor-pointer'>&times;</div>
        
        {children}
        ś
        </div>
    </div>
  )
}

export default Modal
