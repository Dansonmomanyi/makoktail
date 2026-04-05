import styled from 'styled-components';

const Wrapper = styled.nav`
  background: linear-gradient(135deg, #3D0C11 0%, #2a0a0c 100%);
  backdrop-filter: blur(15px);
  border-bottom: 3px solid #E1C07E;
  box-shadow: 0 8px 32px rgba(61, 12, 17, 0.3);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  
  .nav-center {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  
  .logo {
    font-size: 2rem;
    font-weight: 900;
    color: #E1C07E;
    letter-spacing: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    white-space: nowrap;
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -10px;
      right: -10px;
      bottom: -5px;
      background: linear-gradient(135deg, #E1C07E 0%, rgba(225, 192, 126, 0.3) 100%);
      border-radius: 4px;
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: scale(1.08) skewX(-2deg);
      color: #fff;
      text-shadow: 0 0 20px rgba(225, 192, 126, 0.5);
      
      &::before {
        opacity: 1;
      }
    }
  }
  
  /* Mobile Menu Toggle (for future mobile menu) */
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: #E1C07E;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
      color: #fff;
    }
  }
  
  /* Tablet Responsive */
  @media (max-width: 1024px) {
    padding: 1.25rem 1.5rem;
    
    .nav-center {
      gap: 1.5rem;
    }
    
    .logo {
      font-size: 1.6rem;
      letter-spacing: 2px;
    }
  }
  
  /* Mobile Responsive */
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    
    .nav-center {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: relative;
    }
    
    .logo {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    
    .mobile-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      padding: 0;
      z-index: 101;
      cursor: pointer;
      
      .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 24px;
        position: relative;
        
        span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #E1C07E;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: absolute;
        }
        
        span:nth-child(1) {
          top: 0;
        }
        
        span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        
        span:nth-child(3) {
          bottom: 0;
        }
        
        &.active {
          span:nth-child(1) {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }
          
          span:nth-child(2) {
            opacity: 0;
            transform: translateY(-50%);
          }
          
          span:nth-child(3) {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          }
        }
      }
    }
  }
  
  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    border-bottom: 2px solid #E1C07E;
    
    .nav-center {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 0;
    }
    
    .logo {
      font-size: 1rem;
      letter-spacing: 0.5px;
    }
    
    .mobile-toggle {
      width: 44px;
      height: 44px;
      
      .hamburger span {
        width: 24px;
        height: 2.5px;
      }
    }
  }

  /* Extra Small Mobile */
  @media (max-width: 360px) {
    padding: 0.5rem 0.75rem;
    
    .nav-center {
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    
    .logo {
      font-size: 0.9rem;
      letter-spacing: 0;
    }
    
    .mobile-toggle {
      width: 40px;
      height: 40px;
      
      .hamburger {
        width: 22px;
        height: 20px;
        
        span {
          width: 22px;
          height: 2px;
        }
      }
    }
  }
`;

export default Wrapper;
