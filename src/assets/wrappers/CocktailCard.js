import styled from 'styled-components';
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  overflow: hidden;
  
  :hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-4px);
  }
  
  img {
    height: 15rem;
    object-fit: cover;
  }
  
  .footer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    h4 {
      margin: 0;
      font-weight: 700;
      font-size: 1.1rem;
    }
    
    h5 {
      margin: 0;
      font-size: 0.9rem;
      color: var(--grey-600);
    }
  }
  
  .info {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 0.85rem;
    color: var(--grey-500);
    
    span {
      background: var(--grey-100);
      padding: 0.25rem 0.5rem;
      border-radius: 2px;
    }
  }
  
  .btn {
    align-self: flex-start;
    margin-top: 0.5rem;
  }

  /* Tablet Responsive */
  @media (max-width: 768px) {
    img {
      height: 12rem;
    }
    
    .footer {
      padding: 0.85rem;
      gap: 0.6rem;
    }
    
    .footer h4 {
      font-size: 1rem;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 480px) {
    img {
      height: 10rem;
    }
    
    .footer {
      padding: 0.75rem;
      gap: 0.5rem;
    }
    
    .footer h4 {
      font-size: 0.95rem;
    }
    
    .footer h5 {
      font-size: 0.8rem;
    }
    
    .info {
      font-size: 0.75rem;
      
      span {
        padding: 0.2rem 0.4rem;
      }
    }
  }
`;

export default Wrapper;
