import styled from 'styled-components';

export const AudioCallSection = styled.section`
  margin: 100px auto;
  padding: 100px;
  background-color: var(--blue-light-rgba);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Score = styled.div``;

export const Pane = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  color: var(--blue-dark);
  background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: var(--blue-dark);
  &:hover {
    cursor: pointer;
    background-color: var(--blue-light-rgba);
  }
  &:first-letter {
    color: var(--blue-dark-rgba);
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
