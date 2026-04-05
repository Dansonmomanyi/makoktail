import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  /* Tablet Responsive */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  /* Mobile Responsive */
  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  /* Small Mobile */
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 2rem 1rem;
    color: var(--grey-600);
    
    h3 {
      margin-bottom: 0.5rem;
    }
  }
`;

export default Wrapper;
