"use client"

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const AddAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    type: 'Admin'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50">
          <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow p-8">
              <h1 className="text-2xl font-semibold text-center mb-8">Add Account</h1>
              
              <div className="flex justify-center gap-20">
                <div className="w-32 pt-1">
                  <h2 className="text-lg font-medium">Account</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-1 max-w-md">
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.gender}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="mb-2">Type</p>
                      <div className="flex gap-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="Admin"
                            checked={formData.type === 'Admin'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Admin
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="Employee"
                            checked={formData.type === 'Employee'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Employee
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="w-56 bg-customBlue text-white py-2  rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountPage;