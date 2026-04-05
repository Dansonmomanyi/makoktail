import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const location = useLocation()
  
  return (
    <div className='layout-container'>
      <Navbar />
      <section className='page-section'>
        <Outlet key={location.pathname} />
      </section>
    </div>
  )
}

export default HomeLayout