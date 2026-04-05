import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <div className='page-content'>
        <div className='content-wrapper'>
          <h1 style={{color: '#d9534f'}}>Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist. Let's get you back to mixing some delicious cocktails!</p>
          <Link to="/" className='btn'>Back To Home</Link>
        </div>
      </div>
    )
  }
}

export default Error