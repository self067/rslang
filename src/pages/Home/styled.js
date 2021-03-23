import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 90px;
`;

export const StyledHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
