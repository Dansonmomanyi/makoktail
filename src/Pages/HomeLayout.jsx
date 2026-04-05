import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <div className='layout-container'>
      <Navbar />
      <section className='page-section'>
        <Outlet />
      </section>
    </div>
  )
}

export default HomeLayout