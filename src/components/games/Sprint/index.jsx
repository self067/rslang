import React, { useState, useEffect } from 'react';
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
  const [resetTimerRequested, setResetTimer] = useState(false);

  const timerCount = 10;
  useEffect(() => {
    if (resetTimerRequested) setResetTimer(true);
  }, [resetTimerRequested]);

  const completeTimer = () => {
    console.log('completeTimer');
  };

  const resetTimer = () => {
    console.log('resetTimer');
  };

  const timerDuration = () => {
    console.log('timerDuration');
  };
  console.log(resetTimerRequested);

  return (
    <SprintSection>
      <Score>{score}</Score>

      <Timer
        outerColor="green"
        innerColor="yellow"
        countdownColor="red"
        timerCount={timerCount}
        displayCountdown={true}
        timerDuration={timerDuration}
        resetTimerRequested={resetTimerRequested}
        resetTimer={resetTimer}
        completeTimer={completeTimer}
      />
      <Pane>
        <ButtonsBlock>
          <NoButton
            onClick={(e) => {
              console.log('onClick');

              setResetTimer(true);
            }}
          >
            Неверно
          </NoButton>
          <YesButton>Верно</YesButton>
        </ButtonsBlock>
      </Pane>
    </SprintSection>
  );
};
