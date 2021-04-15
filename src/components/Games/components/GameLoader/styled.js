import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  background: rgba(0, 0, 0, 0.85);
`;

const Timer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-family: inherit;
  z-index: 100;

  border: 2px dashed whitesmoke;
`;

export { Timer, Overlay };
