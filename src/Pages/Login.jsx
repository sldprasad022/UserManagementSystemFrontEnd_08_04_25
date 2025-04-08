// import axios from 'axios';
// import React,{useState} from 'react'
// import { BASE_URL } from '../APIConstant';
// import Swal from "sweetalert";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {

//   const[loginParameters,setLoginParameters]=useState({
//     emailOrMobileNumber:'',
//     password:''
//   })

//   const navigateTo = useNavigate();

//   const handleChange =(e)=>{
//     const{name,value}=e.target;
//     setLoginParameters((prevData)=>({
//         ...prevData,
//         [name]:value,
//     }))
//   }

//   const formData = new FormData();
//   formData.append('emailOrMobileNumber',loginParameters.emailOrMobileNumber);
//   formData.append('password',loginParameters.password);

//   const handleLogin =async(e)=>{
//       e.preventDefault();

//       try 
//       {
//         const loginResponse = await axios.post(`${BASE_URL}api/auth/login`,formData,{
//           headers: {
//             "Content-Type": "multipart/form-data",
//           }
//         })

//         console.log(loginResponse.data);

//         if(loginResponse.status===200)
//         {
//           console.log("Login Successfull"+loginResponse.data)

//           sessionStorage.setItem('jwtToken',loginResponse.data.token);
//           sessionStorage.setItem('role',loginResponse.data.userDetails.role)

//           setLoginParameters({
//             emailOrMobileNumber:'',
//             password:''
//           })

//           Swal({
//             icon: 'success',
//             title: 'Login Successfully',
//             text: 'User Login Successfully',
//           })

//           if(loginResponse.data.userDetails.role==='ROLE_ADMIN')
//           {
//             navigateTo('/admindashboard')
//           }
//           else
//           {
//             navigateTo('/userdashboard')
//           }


            
//         }
//       } 
//       catch (error) 
//       {
//         console.log('Error while logging'+error);

//         Swal({
//           icon: 'warning',
//           title: 'Error',
//           text: 'An error occurred while Log in',
//         });
        
//       }
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-400">

//           <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">

//             <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//               Login
//             </h2>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="name"
//                 name="emailOrMobileNumber"
//                 value={loginParameters.emailOrMobileNumber}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="User Name"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={loginParameters.password}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Email Id"
//                 required
//               />
//                </div>
//                <p className='my-4'>
//                   <h1 className='text-blue-400 text-end'><Link to='/createUser'>Forgot Password?</Link></h1>
//               </p>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
//               >
//                 Login
//               </button>
//               <p className='mt-4'>
//                 Does n't have an Account ? <span className='text-blue-400'><Link to='/createUser'>Sign up</Link></span>
//               </p>
//           </form>
//     </div>

//   )
// }

// export default Login


import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../APIConstant';
import Swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // eye icons
import { toast } from "react-toastify";

const Login = () => {
  const [loginParameters, setLoginParameters] = useState({
    emailOrMobileNumber: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false); // 👁️ password visibility

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginParameters((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formData = new FormData();
  formData.append('emailOrMobileNumber', loginParameters.emailOrMobileNumber);
  formData.append('password', loginParameters.password);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(`${BASE_URL}api/auth/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      console.log(loginResponse.data);

      if (loginResponse.status === 200) {
        sessionStorage.setItem('jwtToken', loginResponse.data.token);
        sessionStorage.setItem('role', loginResponse.data.userDetails.role);
        sessionStorage.setItem('userName',loginResponse.data.userDetails.userName);

        setLoginParameters({
          emailOrMobileNumber: '',
          password: ''
        });

        // Swal({
        //   icon: 'success',
        //   title: 'Login Successfully',
        //   text: 'User Login Successfully',
        // });

        toast.success(loginResponse.data.message);

        if (loginResponse.data.userDetails.role === 'ROLE_ADMIN') {
          navigateTo('/admindashboard');
        } else {
          navigateTo('/userdashboard');
        }
      }
    } catch (error) {
      console.log('Error while logging' + error);

      Swal({
        icon: 'warning',
        title: 'Error',
        text: 'An error occurred while Log in',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="name"
            name="emailOrMobileNumber"
            value={loginParameters.emailOrMobileNumber}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="User Name"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={loginParameters.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3 text-gray-600 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <p className="my-4 text-right text-blue-400">
          <Link to="/createUser">Forgot Password?</Link>
        </p>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <span className="text-blue-400">
            <Link to="/createUser">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
