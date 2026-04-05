import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='page-content'>
      <div className='content-wrapper'>
        <h1>About Makoktail</h1>
        <p>Makoktail is your go-to app for discovering cocktail recipes. Search by first letter to find thousands of drink recipes, ingredients, and instructions. Mix, shake, and enjoy!</p>
        <Link to="/" className='btn'>Back Home</Link>
      </div>
    </div>
  )
}

export default About