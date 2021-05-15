import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url('images/backgrounds/5555.jpg') center no-repeat;
  background-size: cover;
  position: relative;
`;

const Words = styled.ul`
  width: 1000px;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Score = styled.h3`
  position: absolute;
  top: 100px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: var(--dark);
  border: 2px solid var(--blue-light-rgba);
  padding: 0.5rem 1rem;
`;

const Word = styled.li`
  cursor: pointer;
  list-style: none;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark);
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

export { Container, Words, Word, SpecialWord, Score };
