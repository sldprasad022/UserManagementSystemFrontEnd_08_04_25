import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../APIConstant';
import { useNavigate } from "react-router-dom";
import { Swal } from "sweetalert";

const EditUser = () => {

    const {userId} =useParams();

    const naviagteTo = useNavigate();

    const[formData,setFormData]=useState({
        userName:'',
        email:'',
        mobileNumber:'',
        department:'',
        salary:'',
        password:''
      })

      

      
  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(()=>{
    fetchByUserId();
  },[userId])

  const token = sessionStorage.getItem("jwtToken")

  const fetchByUserId = async () => {
    try 
    {
        const response = await axios.get(`${BASE_URL}api/admin/fetchByUserId/${userId}`,{
            headers :{
                Authorization : `Bearer ${token}`
            }
        });
        const data = response.data;
        console.log('User Id', userId);
        console.log(data);

        // Update formData with fetched data
        setFormData({
            userName: data.userName || '',
            email: data.email || '',
            mobileNumber: data.mobileNumber || '',
            department: data.department || '',
            salary: data.salary || '',
            password: data.password || ''
        });

        
    } 
    catch (error) 
    {
        console.error('Error fetching user data:', error);
    }
};



//Edit Operation
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const form = new FormData();
    form.append('userName', formData.userName); // Append the userName field
    form.append('email', formData.email);
    form.append('mobileNumber', formData.mobileNumber);
    form.append('department', formData.department); // If department is empty, send an empty string
    form.append('salary', formData.salary); // Same for salary
    form.append('password', formData.password);

    try
    {
        const response = await axios.put(`${BASE_URL}api/admin/update/${userId}`,formData,{
            headers :{
                Authorization :`Bearer ${token}`,
                "Content-Type":"multipart/form-data"
            }
        })
        console.log('updated User response :: ',response.data);

        Swal({
          icon: 'success',
          title: 'Edit Successfully',
          text: 'The user has been successfully edited!',
        })

        naviagteTo('/admindashboard/totalUsers')
        
    } 
    catch (error) 
    {
        console.error('Error updating data user data:', error);

        if (error.response && error.response.status === 401)
        {
          // Token expired or unauthorized
          sessionStorage.clear();
          localStorage.clear();
          alert("Session expired. Please login again.");
          naviagteTo('/'); // Redirect to login
        }
    }

  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200">

    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">

      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Sign Up
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
          id="name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="User Name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email Id"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          type="number"
          id="name"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mobile Number"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <input
          type="text"
          id="name"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Department"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Salary
        </label>
        <input
          type="text"
          id="name"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Salary"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default EditUser
