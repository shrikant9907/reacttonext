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
        your_mobile: "",
    }

    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const isValidMobileNumber = (mobile) => {
        return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(mobile);
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.your_name) newErrors.your_name = 'Name is required.';
        if (!formData.your_email) {
            newErrors.your_email = 'Email is required.';
        } else if (!isValidEmail(formData.your_email)) {
            newErrors.your_email = 'Invalid email address.';
        }
        if (formData.your_mobile && !isValidMobileNumber(formData.your_mobile)) {
            newErrors.your_mobile = 'Invalid Indian mobile number.';
        }
        if (!formData.your_message) newErrors.your_message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let newErrors = { ...errors };
        if (name === 'your_email' && value && !isValidEmail(value)) {
            newErrors[name] = 'Invalid email address.';
        } else if (name === 'your_mobile' && value && !isValidMobileNumber(value)) {
            newErrors[name] = 'Invalid Indian mobile number.';
        } else {
            delete newErrors[name];
        }
        setErrors(newErrors);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            if (response.status === 201 || response.status === 200) {
                setFormData(initialValue); 
                succesNotify();
            } else {
                errorNotify();
            }
        } catch (error) {
            errorNotify();
        }
    }

    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <form onSubmit={handleOnSubmit} className='p-8 max-w-md mx-auto border shadow-lg mt-5 rounded-md'>
                <h3 className='font-bold mb-5 text-xl text-center'>Contact Form</h3>
                <div className='mb-2'>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="your_name"
                        value={formData.your_name}
                        onChange={handleOnChange}
                        maxLength={50}
                        placeholder='Enter your full name'
                        className='border outline-none w-full p-2'
                    />
                    {errors.your_name && <p className='text-red-500'>{errors.your_name}</p>}
                </div>
                <div className='mb-2'>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="your_email"
                        maxLength={50}
                        value={formData.your_email}
                        onChange={handleOnChange}
                        placeholder='Enter your email address.'
                        className='border outline-none w-full p-2'
                    />
                    {errors.your_email && <p className='text-red-500'>{errors.your_email}</p>}
                </div>
                <div className='mb-2'>
                    <label>Mobile Number:</label>
                    <input 
                        type="text" 
                        name="your_mobile"
                        value={formData.your_mobile}
                        onChange={handleOnChange}
                        maxLength={15}
                        placeholder='Enter your mobile number'
                        className='border outline-none w-full p-2'
                    />
                    {errors.your_mobile && <p className='text-red-500'>{errors.your_mobile}</p>}
                </div>
                <div className='mb-4'>
                    <label>Message:</label>
                    <textarea 
                        name='your_message'
                        value={formData.your_message}
                        maxLength={1000}
                        className='border outline-none w-full p-2' 
                        placeholder='Enter your message'
                        onChange={handleOnChange}
                    ></textarea>
                    {errors.your_message && <p className='text-red-500'>{errors.your_message}</p>}
                </div>
                <div className='mb-2 text-center'> 
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-full'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
