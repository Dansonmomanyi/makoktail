import { Link } from "react-router-dom"
import { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import NavLinksWrapper from '../assets/wrappers/NavLinks'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <Wrapper>
        <div className='nav-center'>
            <span className='logo'>Makoktail</span>
        <button className='mobile-toggle' onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <NavLinksWrapper isOpen={isMenuOpen} closeMenu={closeMenu}>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>About</Link> 
              <Link to="/newsletter" onClick={closeMenu}>Newsletter</Link>   
            </div>
        </NavLinksWrapper>
        </div>
    </Wrapper>
  )
}

export default Navbar