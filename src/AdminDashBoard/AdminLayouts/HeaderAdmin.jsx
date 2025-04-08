import React from 'react'
import { FiAlignRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const HeaderAdmin = ({toggleSidebar}) => {
  return (
   <header className='bg-gray-400 flex justify-between items-center p-8'>
      <div className='flex items-center gap-20 text-4xl'>
        <button onClick={toggleSidebar}>
            <FiAlignRight />
        </button>
      </div>
      <div className='flex space-x-4 text-white'>
          <Link>Log Out</Link>
          <Link>Log Out</Link>
      </div>
   </header>
  )
}

export default HeaderAdmin