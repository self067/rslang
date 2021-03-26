import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 90px;
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
