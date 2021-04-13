<<<<<<< HEAD:src/components/games/Sprint/styled.js
import styled from 'styled-components';

export const SprintSection = styled.section`
  position: relative;
  /* max-width: 960px; */
  margin: 0px auto;
  padding: 50px;
  /* padding-top: 7vh; */
  /* height: 100vh; */

  background-image: url('images/sprint/bg.jpg');
  background-color: var(--blue-light-rgba);
  background-position: 0% 100%;
  background-size: auto;
  background-repeat: no-repeat;
  font-weight: 700;
`;

export const Card = styled.div`
  max-width: 600px;
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
  height: 25px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-around;
`;

export const ButtonsBox = styled.div`
  display: flex;
  /* width: 50%; */
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
  justify-content: space-around;
`;
export const PandaBottom = styled.img`
  position: absolute;
  left: auto;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 250px;
  @media screen and (max-width: 991px) {
    display: none;
  }
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

export const Img2 = styled.img`
  width: 25px;
`;

export const ArrowImg = styled.img`
  width: 40px;
`;

export const ResultImg = styled.img`
  width: 40px;
  height: 40px;
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

export const NoButton = styled.button`
  color: #fff;
  padding: 12px 35px;
  border-radius: 50px;
  background-color: #f53b0c;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  /* background-color: red; */
`;

export const YesButton = styled(NoButton)`
  background-color: #62c927;
  /* background-color: green; */
`;

export const Score = styled.div`
  margin-bottom: 20px;
  color: #fff;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 4px #000;
`;
=======
import styled from 'styled-components';
import { Button } from 'components/button';

export const SprintSection = styled.section`
  max-width: 960px;
  margin: 100px auto;
  padding: 100px;

  background-color: var(--blue-light-rgba);
`;

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

export const Score = styled.div``;
>>>>>>> 5e86db8... feat: add stat data and sprint start page:src/components/games/Sprint/components/SprintGame/styled.js
