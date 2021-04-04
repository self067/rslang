import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: #67595e;
`;

const Words = styled.ul`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Word = styled.li`
  cursor: pointer;
  list-style: none;
  font-size: 24px;
  font-weight: 400;

  color: whitesmoke;
  padding: 10px 15px;
  transition: 0.3s all ease;

  &:hover {
    background: #333;
  }
`;

const SpecialWord = styled.span`
  position: absolute;
  font-size: 36px;
  font-weight: 700;

  pointer-events: none;
`;

export { Container, Words, Word, SpecialWord };
