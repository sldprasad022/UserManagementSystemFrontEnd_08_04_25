import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({toggleSideBar}) => {

  const userName  = sessionStorage.getItem('userName')

  return (
    <header className='bg-blue-400 flex items-center justify-between p-8 text-2xl'>
        {/*  */}
        <div className='flex items-center gap-40'>
            <button onClick={ toggleSideBar } className='text-4xl'>
              {console.log("toggleSideBar called")}
                <GiHamburgerMenu />
            </button>
            <input placeholder='Search Something' className='p-2 bg-white rounded-lg'/>
        </div>
       
        {/*  */}
        <div className='flex space-x-4 text-yellow-800'>
            <Link>Home</Link>
            <Link to='/userdashboard/aboutUs'>About us</Link>
            <Link>Contact us</Link>
            <Link>{userName}</Link>
        </div>
    </header>
  )
}

export default Header