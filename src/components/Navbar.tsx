import React from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container pt-8 ' >
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>
                Hasham

            </div>
            <ul className='gap-10 hidden lg:gap-16 md:flex'>
                <li className='menuLink'><a href='#Home'>Home</a></li>
                <li className='menuLink'><a href='#About'>About</a></li>
                <li className='menuLink'><a href='#Skills'>Skills</a></li>
                <li className='menuLink'><a href='#Contact'>Contact</a></li>



            </ul>
            <IoMenu className='md: hidden ' size={30}/>

        </div>
      
    </div>
  )
}

export default Navbar