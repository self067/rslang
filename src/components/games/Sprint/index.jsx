import React, { useState } from 'react';
import { Timer } from '../components/Timer';
import {
  Pane,
  Score,
  SprintSection,
  ButtonsBlock,
  NoButton,
  YesButton,
} from './styled';

export const Sprint = () => {
  const [score, setScore] = useState(0);

  return (
    <SprintSection>
      <Score>{score}</Score>

      <Timer />
      <Pane>
        <ButtonsBlock>
          <NoButton>Неверно</NoButton>
          <YesButton>Верно</YesButton>
        </ButtonsBlock>
      </Pane>
    </SprintSection>
  );
};
