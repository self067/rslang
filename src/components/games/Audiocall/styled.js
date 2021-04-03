import styled from 'styled-components';
import { Button } from 'components/button';

export const AudioCallSection = styled.section`
  max-width: 960px;
  margin: 100px auto;
  padding: 100px;
  background-color: var(--blue-light-rgba);
`;

export const Pane = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  color: var(--blue-dark);
  background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonsBlock = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  /* align-items: flex-end; */
  align-self: center;
  justify-content: space-around;
`;
export const NoButton = styled(Button)`
  background-color: red;
`;

export const YesButton = styled(NoButton)`
  background-color: green;
`;

export const Score = styled.div``;
