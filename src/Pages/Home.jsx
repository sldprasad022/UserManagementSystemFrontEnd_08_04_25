import React,{useState} from 'react'
import Header from '../Layouts/Header'
import Sidebar from '../Layouts/Sidebar'
import { Outlet } from "react-router-dom";

const Home = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)


  return (
    <div>
       
        <Header toggleSideBar={()=>setIsSidebarOpen(!isSidebarOpen)}/>

        <div className='w-full flex'>
            <div className={`${isSidebarOpen ? 'w-2/12' : 'hidden'}`}>
                <Sidebar/>
            </div>

            <div className={`${isSidebarOpen ? 'w-10/12' : 'w-full'}`}>
                <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default Home
