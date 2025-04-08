import React,{useState} from 'react'
import axios from 'axios'
import { BASE_URL } from "../APIConstant";
import Swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
//import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const[formData,setFormData]=useState({
    userName:'',
    email:'',
    mobileNumber:'',
    department:'',
    salary:'',
    password:''
  })

  const [showPassword, setShowPassword] = useState(false); // 👁️ password visibility

  const navigate = useNavigate();


  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

    const form = new FormData();
    form.append('userName', formData.userName); // Append the userName field
    form.append('email', formData.email);
    form.append('mobileNumber', formData.mobileNumber);
    form.append('department', formData.department); // If department is empty, send an empty string
    form.append('salary', formData.salary); // Same for salary
    form.append('password', formData.password);


  const handleSubmit =async(e)=>{
      e.preventDefault();

      try 
      {
        const response =await axios.post(`${BASE_URL}api/auth/save`,form);
        console.log("User Created Suceessfully :",response.data);

        if(response.status===200)
        {

          setFormData({
            userName: '',
            email: '',
            mobileNumber: '',
            department: '',
            salary: '',
            password: '',
          });

          Swal({
                icon: 'success',
                title: 'User Saved Successfully',
                text: 'The user has been successfully added!',
              })

              navigate('/')
        }



      } 
      catch (error)
      {

        console.log('Error while Save the user Data'+error);

        Swal({
          icon: 'warning',
          title: 'Error',
          text: 'An error occurred',
        });
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

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? "text" :"password" }
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
          <span className='absolute top-9 right-3 text-gray-600 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
            { showPassword ? <FaEyeSlash /> : <IoEyeSharp /> }
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
        <p className='flex mt-4'>
          Already have an Account? <span className='text-blue-400'><Link to='/'> Sign in</Link></span>
        </p>
      </form>
    </div>
  )
}

export default CreateUser


