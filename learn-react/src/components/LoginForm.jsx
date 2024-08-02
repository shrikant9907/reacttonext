// LoginForm.jsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation Schema for Login
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Please correct your email.').required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

// Handle form submission
const handleFormSubmission = (values) => { 
  console.log(values);ś
};

// Login Form
const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => handleFormSubmission(values)
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-5 px-8 border border-gray-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className='text-red-500'>*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <span className='text-red-500'>*</span></label>
      <div className='relative'>
      <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        <button className='cursor-pointer absolute right-3 top-2' onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
      </div>
        {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
      </div>

      <div className="mb-4 text-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
