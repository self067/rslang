import styled from 'styled-components';
import { Button } from 'components/button';

export const SprintSection = styled.section`
  max-width: 960px;
  margin: 100px auto;
  padding: 100px;
  /* padding-top: 7vh; */
  height: 100vh;

  background-image: url('images/sprint/bg.jpg');
  background-color: var(--blue-light-rgba);
  background-position: 0% 100%;
  background-size: auto;
  background-repeat: no-repeat;
  font-weight: 700;
`;

export const Card = styled.div`
  width: 650px;
  margin-right: auto;
  margin-left: auto;
`;

export const PandaTop = styled.img`
  display: block;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
`;
export const Wrapper = styled.div`
  overflow: hidden;
  margin-top: -40px;
  border-radius: 10px;
  background-color: #fff;
`;

export const BoxColor = styled.div`
  padding-top: 35px;
  padding-bottom: 15px;
  background-color: #f6fa07;
`;

export const CheckBoxes = styled.div`
  display: flex;
  width: 20%;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`;

export const ButtonsBox = styled.div`
  display: flex;
  width: 50%;
  max-width: 550px;
  margin-top: 5vh;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
`;

export const PandaBox = styled.div`
  display: flex;
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 15px;
  justify-content: space-between;
`;
export const PandaBottom = styled.img`
  position: absolute;
  left: auto;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 250px;
`;

export const PandaImg = styled.img`
  max-height: 60px;
`;

export const WordScore = styled.div`
  text-align: center;
`;
export const WordsBox = styled.div`
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextCard = styled.div`
  padding-bottom: 25px;
  font-size: 24px;
  text-transform: uppercase;
`;

//

//

//
export const Pane = styled.div`
  width: 600px;
  height: 400px;
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

export const Score = styled.div`
  margin-bottom: 20px;
  color: #fff;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 4px #000;
`;
