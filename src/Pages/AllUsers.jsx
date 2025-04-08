import axios from 'axios';
import React from 'react'
import { useState,useEffect } from "react";
import { BASE_URL } from '../APIConstant';
import Edit from './Edit';

const AllUsers = () => {

  const [allUsersData, setAllUsersData]=useState([]);

  const [editstate,setEditState]=useState(false);

  const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(()=>{
    fetchAllUsersData();
  },[])

  const fetchAllUsersData = async()=>{

      try
      {
        const response = await axios.get(`${BASE_URL}api/auth/fetchAll`)

        console.log('Users Dashboard all Data : ',response.data);

        setAllUsersData(response.data);

      } 
      catch(error) 
      {
        console.error('Error fetching users:', error);
      }
  }

  return (
    <>
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
                  allUsersData.map((eachObject) => (
                    <tr key={eachObject.userId}>
                      <td className="border border-black px-4 py-2">{eachObject.userId}</td>
                      <td className="border border-black px-4 py-2">{eachObject.userName}</td>
                      <td className="border border-black px-4 py-2">{eachObject.email}</td>
                      <td className="border border-black px-4 py-2">{eachObject.department}</td>
                      <td className="border border-black px-4 py-2">{eachObject.role}</td>
                      <td className="border border-black px-4 py-2">{eachObject.salary}</td>
                      <td className="border border-black px-4 py-2">
                        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={()=>SetEditState(true)} >Edit</button> */}
                        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() =>
                                           {
                                            setSelectedUserId(eachObject.userId);
                                            setEditState(true);
                                          }}>
                                  Edit
                        </button>

                      </td>
                    </tr>
                  ))
                }
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
        {/* {editstate && (
            <div className="fixed top-20 right-48 flex justify-center items-center bg-opacity-50 z-50">
              <div className="w-96 h-[470px] bg-white p-6 shadow-lg relative">
                <button className="absolute top-2 right-2 text-xl" onClick={() => SetEditState(false)}>
                  ✖
                </button>
                <Edit/>
              </div>
            </div>
        )} */}

        {editstate && selectedUserId && (
          <div className="fixed top-20 right-48 flex justify-center items-center bg-opacity-50 z-50">
            <div className="w-96 h-[470px] bg-white p-6 shadow-lg relative">
              <button className="absolute top-2 right-2 text-xl" onClick={() => setEditState(false)}>
                ✖
              </button>
              <Edit userId={selectedUserId} setEditState={setEditState} refreshData={fetchAllUsersData} />
            </div>
          </div>
        )}


    </>
  )
}

export default AllUsers