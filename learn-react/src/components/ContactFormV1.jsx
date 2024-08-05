import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const ContactForm = () => {

    const succesNotify = () => toast.success('Your form is submitted successfully.');
    const errorNotify = () => toast.error('Something went wrong.');

    const initialValue = {
        your_name: "",
        your_email: "",
        your_message: "",
    }

    const [formData, setFormData] = useState(initialValue);
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
       
        try {

            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);

            console.log('response___', response)

            if (response.status === 201 || response.status === 200) {
                setFormData(initialValue); 
                succesNotify();
            } else {
                errorNotify()
            }

        } catch (error) {
            errorNotify()
        }

    }


  return (
    <div>
    
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <form onSubmit={handleOnSubmit} className='p-8 max-w-md mx-auto border shadow-lg mt-5 rounded-md'>
            <h3 className='font-bold mb-5 text-xl text-center'>Contact Form</h3>
            <div className='mb-2'>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="your_name"
                    required
                    value={formData.your_name}
                    onChange={(e) => setFormData({...formData, your_name: e.target.value})}
                    maxLength={50}
                    placeholder='Enter your full name'
                    className='border outline-none w-full p-2'
                />
            </div>
            <div className='mb-2'>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="your_mail"
                    required
                    maxLength={50}
                    value={formData.your_email}
                    onChange={(e) => setFormData({...formData, your_email: e.target.value})}
                    placeholder='Enter your email address.'
                    className='border outline-none w-full p-2'
                />
            </div>
            <div className='mb-4'>
                <label>Message:</label>
                <textarea 
                    name='your_message'
                    required
                    value={formData.your_message}
                    maxLength={1000}
                    className='border outline-none w-full p-2' 
                    placeholder='Enter yoru message'
                    onChange={(e) => setFormData({...formData, your_message: e.target.value})}
                >
                </textarea>
            </div>
            <div className='mb-2 text-center'> 
                <button className='px-4 py-2 bg-blue-500 text-white rounded-full'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
