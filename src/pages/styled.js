import styled from 'styled-components';

export const StyledSection = styled.section`
  box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 20%);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
`;

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  margin-top: -100px;
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
