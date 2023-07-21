import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import NavSub from '../Components/NavSub'
import CourseMain from '../Components/CourseMain'
import PageEnd from '../Components/PageEnd'

const Page59 = () => {
  return (
    <>
    
    <main className='ml-16 my-8 flex h-auto justify-center'>
        <div className='w-1/6 h-auto'>
        <SideBar/>
        </div>
        <div className='w-9/12 mx-8 h-auto'>
          <NavSub/>
          <CourseMain/>
        </div>
    </main>
    
      
    </>
  )
}

export default Page59
