// import axios from 'axios';
// import React from 'react'
// import { useState,useEffect } from "react";
// import { BASE_URL } from '../../APIConstant';

// const TotalUsers = () => {

//     const[allusersList,setAllUsersList]=useState([]);



//     useEffect(()=>{
//       fetchAllUsers()
//     },[])


//     const token = sessionStorage.getItem("jwtToken");


//     const fetchAllUsers = async()=>{

//         const response = await axios.get(`${BASE_URL}api/admin/fetchAll`,{
//           headers :{
//             Authorization : `Bearer ${token}`
//           }
//         })

//         console.log('API Response :'+ response);

//         const allUsersData = response.data;

//         console.log('API Response :'+ allUsersData);

//         setAllUsersList(allUsersData);

//     }


    

//   return (
//     <div className='pt-20 pl-20'>
//       <table class="table-auto border-collapse w-full">
//         <thead>
//           <tr>
//             <th class="border border-black px-4 py-2">UserId</th>
//             <th class="border border-black px-4 py-2">User Name</th>
//             <th class="border border-black px-4 py-2">Email</th>
//             <th class="border border-black px-4 py-2">Department</th>
//             <th class="border border-black px-4 py-2">Role</th>
//             <th class="border border-black px-4 py-2">Salary</th>
//             <th class="border border-black px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {
//               allusersList.map((eachObject)=>(
//                 <tr key={eachObject.userId}>

//                 </tr>
//               ))
//             }
//           </tr>
//         </tbody>
//       </table>


//     </div>
//   )
// }

// export default TotalUsers





//*****************Correct code  with out Adding user data in Admin panel above table add user button

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BASE_URL } from '../../APIConstant';
import { useNavigate } from "react-router-dom";

const TotalUsers = () => {
  const [allusersList, setAllUsersList] = useState([]);
  


  const navigateTo = useNavigate();

  const token = sessionStorage.getItem("jwtToken");

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try
     {
      const response = await axios.get(`${BASE_URL}api/admin/fetchAll`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('API Response:', response);

      const allUsersData = response.data;
      setAllUsersList(allUsersData);
    }
    catch (error) 
    {
      console.error('Error fetching users:', error);
    }
  };


  const handleDelete = async(userId)=>{

    console.log(`Deleted Users Id`+userId);
    

      await axios.delete(`${BASE_URL}api/admin/deleteByUserId/${userId}`,{
        headers :{
          Authorization : `Bearer ${token}`
        }
      })

      setAllUsersList(allusersList.filter(users=>(users.userId!==userId)))
  }

  const handleEdit = (userId)=>{
      navigateTo(`/admindashboard/edit/${userId}`)
  }

  return (
    <div className="pt-20 pl-20">

      <table className="table-auto border-collapse w-full ">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">UserId</th>
            <th className="border border-black px-4 py-2">User Name</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Department</th>
            <th className="border border-black px-4 py-2">Role</th>
            <th className="border border-black px-4 py-2">Salary</th>
            <th className="border border-black px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
                allusersList.map((eachObject) => (
                  <tr key={eachObject.userId}>
                    <td className="border border-black px-4 py-2">{eachObject.userId}</td>
                    <td className="border border-black px-4 py-2">{eachObject.userName}</td>
                    <td className="border border-black px-4 py-2">{eachObject.email}</td>
                    <td className="border border-black px-4 py-2">{eachObject.department}</td>
                    <td className="border border-black px-4 py-2">{eachObject.role}</td>
                    <td className="border border-black px-4 py-2">{eachObject.salary}</td>
                    <td className="border border-black px-4 py-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={()=>handleEdit(eachObject.userId)}>Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>handleDelete(eachObject.userId)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
        </tbody>
      </table>
    </div>
  );
};

export default TotalUsers;





