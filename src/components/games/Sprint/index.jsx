import React, { useState } from 'react';
import { RSvgTimer } from '../components/Timer/RSVGTimer';
import { Score, SprintSection, ButtonsBlock, Button } from './styled';

export const Sprint = () => {
  const [score, setScore] = useState(0);

  return (
    <SprintSection>
      <Score>{score}</Score>

      <RSvgTimer />

      <ButtonsBlock>
        <Button>Неверно</Button>
        <Button>Верно</Button>
      </ButtonsBlock>
    </SprintSection>
  );
};
