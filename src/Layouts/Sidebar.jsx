// import React from 'react'
// import { data } from "./SidebarData";
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


// const Sidebar = () => {

// const navigateTo = useNavigate();




//   const handleLogout = ()=>{
//       sessionStorage.clear();
//       navigateTo('/')
//   }

//   return (
//     <div className='bg-gray-400 p-2 min-h-screen'>
//         {
//           data.map((eachObject)=>(
//             <div key={eachObject.id} className='bg-orange-400 p-4 mb-2 flex justify-center items-center text-white rounded-lg'>
//                 <Link to={eachObject.path}>
//                     {eachObject.title}
//                 </Link>
//             </div>
//           ))
//         }
//     </div>
//   )
// }

// export default Sidebar


import React from 'react'
import { data } from "./SidebarData";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Sidebar = () => {

const navigateTo = useNavigate();


const handleLogout = ()=>{
    sessionStorage.clear();

    toast.success('Logout Successfull');

    navigateTo('/',{replace:true})
  }

  return (
    <div className='bg-gray-400 p-2 min-h-screen'>
        {
          data.map((eachObject)=>(
            <div key={eachObject.id} className='bg-orange-400 p-4 mb-2 flex justify-center items-center text-white rounded-lg'>
              {
                eachObject.title==='Log out' ? (
                  <button onClick={handleLogout} className='text-2xl flex  items-center gap-4'>
                     {eachObject.icon}
                    {eachObject.title}
                  </button>
                ):(
                  <Link to={eachObject.path} className='text-2xl flex  items-center gap-4'>
                     {eachObject.icon}
                      {eachObject.title}
                  </Link>
                )
              }     
            </div>
          ))
        }
    </div>
  )
}

export default Sidebar