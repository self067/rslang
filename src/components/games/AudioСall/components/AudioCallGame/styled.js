
import styled from 'styled-components';

export const StyledContent = styled.div`
  max-width: 1120px;
  width: 100%;
  text-align: center;
  background: url('images/1111.png') center no-repeat;
  background-size: cover;
  position: relative;
`;

export const StyledDescription = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0 2rem;
`;

export const Score = styled.p`
  font-size: 1.5rem;
  color: var(--light);
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const StyledWordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto 4rem;
`;

export const StyledWord = styled.p`
  margin: 0 1rem;
  padding: 1rem;
  font-size: 2rem;
  color: var(--light);
  &:hover {
    cursor: pointer;
    background-color: var(--blue-light-rgba);
  }
`;

export const StyledAnswerContent = styled.p`
  font-weight: 700;
  font-size: 3rem;
  color: var(--blue-dark);
`;

export const StyledButtonBlock = styled.div`
  margin: 0 auto;
`;

