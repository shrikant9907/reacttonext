import React, { useState, useEffect, useRef } from 'react'

const DropdownMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const options = ["Edit Profile", 'Appearance', 'Log Out'];

    const dropdownRef = useRef(null)

    const handleOnClickOutside = (event) => {
        if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
            console.log('yes it contains it')
        } else {
            setIsOpen(false)
            console.log('You clicked outside.')
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOnClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleOnClickOutside)
        }
    }, []);

    return (
        <div className='w-80 mx-auto mt-3' ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className='border px-3 py-2 bg-blue-100 rounded-lg'>Settings</button>

            {isOpen &&
                <div className='flex flex-col border-x border-t mt-5'>
                    {options && options.map((option) => {
                        return <div className='border-b px-4 py-3'>{option}</div>
                    })}
                </div>
            }
        </div>
    )
}

export default DropdownMenu
