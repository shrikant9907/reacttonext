// SignupForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation Schema for Signup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Please correct your email.').required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password too short')
    .matches(/[a-zA-Z]/, 'Password must contain letters')
    .matches(/\d/, 'Password must contain numbers')
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required.')
});

// Handle form submission
const handleFormSubmission = (values) => { 
  console.log(values);
};

// Signup Form
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => handleFormSubmission(values)
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-5 px-8 border border-gray-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>}
      </div>

      <div className="mb-4 flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </form>
  );
};

export default SignupForm;
