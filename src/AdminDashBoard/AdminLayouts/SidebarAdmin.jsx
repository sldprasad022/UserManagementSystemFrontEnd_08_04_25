import React from 'react'
import { SidebarDataAdmin } from "./SidebarDataAdmin";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SidebarAdmin = () => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    
    console.log("Log out Successfully");
    
    sessionStorage.clear();

    toast.success('Log out Successfully');

    navigate('/',{replace:true})

  }

  return (
    <div className='bg-yellow-400 min-h-screen p-2'>
        {
          SidebarDataAdmin.map((eachObject)=>(
            <div key={eachObject.id} className='bg-orange-400 text-2xl text-white p-2 mb-2 flex items-center justify-center'>
                {
                  eachObject.title==='Log out'?(
                    <button onClick={handleLogout} className='text-2xl flex  items-center gap-2'>
                      {eachObject.icon}
                        {eachObject.title}
                    </button>
                  ):(
                    <Link to={eachObject.path} className='text-2xl flex  items-center gap-2'>
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

export default SidebarAdmin