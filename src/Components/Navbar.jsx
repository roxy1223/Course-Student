import React from 'react'
import Group18 from '../Utils/Images/Group 18.svg'
import Group19 from '../Utils/Images/Group19.svg'
import Vector from '../Utils/Images/Vector.svg'
import Ellipse from '../Utils/Images/Ellipse 215.png'
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <nav className='flex w-full'>
    <section className='flex'>
      <img src={Group18} className='logo' alt='logo'/>
      <h1 className='name font-sans font-medium'>Edfling Courses</h1>
    </section>
    <section>
        <ul className='list-none flex mt-1 mx-20 list-elements'>
            <li className='mx-10 mt-6 font-sans font-normal text-lg'>Home</li>
            <li className='mx-10 mt-6 font-sans font-normal text-lg'>Why Us</li>
            <li className='mx-10 mt-6 font-sans font-medium text-lg' style={{color:'#215D4F'}}>Courses</li>
            <li className='mx-10 mt-6 font-sans font-normal text-lg'>Mentors</li>
            <li className='mx-10 mt-6 font-sans font-normal text-lg'>Contact us</li>
        </ul>
    </section>
    <section className='flex mt-4 float-right ml-80 sec3'>
        <img src={Group19} className='bell-icon mx-3 mt-6' alt='bell icon'/>
        <img src={Vector} className='comments-icon mx-3 mt-6' alt='comments icon'/>
        <img  src={Ellipse} className='profile-icon mx-3 mt-4' alt='profile icon'/>
    </section>
    </nav>
  )
}

export default Navbar
