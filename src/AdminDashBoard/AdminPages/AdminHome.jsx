import React,{useState} from 'react'
import HeaderAdmin from '../AdminLayouts/HeaderAdmin'
import Sidebar from '../../Layouts/Sidebar'
import SidebarAdmin from '../AdminLayouts/SidebarAdmin'
import { Outlet } from 'react-router-dom'

const AdminHome = () => {

  const[isSidebarOpen,setIsSidebarOpen]=useState(true);

  return (
    <div>
        <HeaderAdmin toggleSidebar={()=>setIsSidebarOpen(!isSidebarOpen)}/>

        <div className='flex w-full'>
            <div className={`${isSidebarOpen ? 'w-2/12' : 'hidden'}`}>
                <SidebarAdmin/>
            </div>
            <div className={`${isSidebarOpen ? 'w-10/12': 'w-full'}`}>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminHome