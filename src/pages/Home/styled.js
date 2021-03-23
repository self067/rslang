import styled from 'styled-components';

export const StyledHome = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
