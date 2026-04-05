import styled from 'styled-components';

const Wrapper = styled.div`
  .nav-links {
    display: flex;
    gap: 3rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    position: relative;
    color: #E1C07E;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 0.75rem 1rem;
    border-radius: 2px;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #E1C07E 0%, #f5d89f 100%);
      transition: width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      border-radius: 2px;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(225, 192, 126, 0.1);
      border-radius: 2px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      color: #fff;
      transform: translateY(-3px);
      
      &::before {
        width: 100%;
      }
      
      &::after {
        opacity: 1;
      }
    }
  }
  
  a.active {
    color: #fff;
    background: rgba(225, 192, 126, 0.15);
    box-shadow: inset 0 0 15px rgba(225, 192, 126, 0.2);
    
    &::before {
      width: 100%;
    }
  }
  
  /* Tablet Responsive */
  @media (max-width: 1024px) {
    .nav-links {
      gap: 2rem;
    }
    
    a {
      font-size: 0.8rem;
      padding: 0.6rem 0.8rem;
    }
  }
  
  /* Mobile Responsive */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      background: linear-gradient(180deg, #3D0C11 0%, #2a0a0c 100%);
      flex-direction: column;
      gap: 0;
      padding: 0;
      border-bottom: 3px solid #E1C07E;
      box-shadow: 0 8px 32px rgba(61, 12, 17, 0.3);
      animation: slideDown 0.3s ease-out;
      max-height: calc(100vh - 72px);
      overflow-y: auto;
      z-index: 100;
      
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    
    .nav-links.active {
      display: flex;
    }
    
    a {
      padding: 1.2rem 1.5rem;
      font-size: 0.9rem;
      border-radius: 0;
      width: 100%;
      display: block;
      
      &::before {
        bottom: 0;
        left: 0;
        right: auto;
        width: 4px;
        height: 0;
      }
      
      &:hover {
        background: rgba(225, 192, 126, 0.15);
        
        &::before {
          width: 4px;
          height: 100%;
        }
      }
    }
    
    a.active {
      background: rgba(225, 192, 126, 0.15);
      border-left: 4px solid #E1C07E;
      padding-left: calc(1.5rem - 4px);
      
      &::before {
        display: none;
      }
    }
  }
  
  /* Extra Small Mobile */
  @media (max-width: 360px) {
    .nav-links {
      padding: 0.25rem 0;
    }
    
    a {
      padding: 0.7rem 1rem;
      font-size: 0.75rem;
    }
  }
`;

export default Wrapper;
