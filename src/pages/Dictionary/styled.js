import styled from 'styled-components';

export const StyledInner = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  color: var(--light);
  font-size: 3rem;
  margin: 2rem 1rem 2rem;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
