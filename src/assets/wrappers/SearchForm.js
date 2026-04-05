import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    min-width: 200px;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* Tablet Responsive */
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    .form {
      grid-template-columns: 1fr auto;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    .form {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    
    .form-input {
      border-radius: var(--borderRadius);
    }
    
    .btn {
      border-radius: var(--borderRadius);
    }
  }
`;

export default Wrapper;
