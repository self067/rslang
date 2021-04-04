import React, { useState, useEffect } from 'react';
import { Timer } from '../components/Timer';
import { StyledLoader } from 'components/loader';
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
  const [words, setWords] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(Math.floor(Math.random() * 30));
  const [group, setGroup] = useState(0);
  const [error, setError] = useState(null);
  const [currentWord, setCurrentWord] = useState(0);

  const secondPage = page > 15 ? page - 2 : page + 2;
  const truth = !!Math.floor(Math.random() * 2);

  console.log('truth=', truth ? 'true' : 'false');

  const timerCount = 10;

  const apiurl = process.env.REACT_APP_APIURL;
  const wordsUrl = `${apiurl}/words?group=${group}&page=${page}`;

  const onLeft = (cr) => {
    console.log('onLeft', cr);
    setCurrentWord(cr + 1);
    // return currentWord + 1;
  };

  const onRight = (cr) => {
    console.log('onRight', cr);
    setCurrentWord(cr + 1);
    // return currentWord + 1;
  };

  useEffect(() => {
    fetch(wordsUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWords(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [wordsUrl]);

  useEffect(() => {
    if (resetTimerRequested) setResetTimer(true);
  }, [resetTimerRequested]);

  useEffect(() => {
    const listener = (e) => {
      console.log(e.key);
      if (e.key === 'ArrowLeft') {
        onLeft(currentWord);
      }
      if (e.key === 'ArrowRight') {
        onRight(currentWord);
      }
    };

    // if (open) {
    document.addEventListener('keydown', listener);
    // }

    return () => document.removeEventListener('keydown', listener);
  }, []);

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
  const word = words ? words[currentWord].word : '';
  const wordTranslate = words
    ? words[truth ? currentWord : currentWord].wordTranslate
    : '';

  return error ? (
    <div>Error: {error.message}</div>
  ) : !isLoaded ? (
    <StyledLoader>Loading...</StyledLoader>
  ) : (
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
        <div>{word}</div>
        <div>{wordTranslate}</div>

        <ButtonsBlock>
          <NoButton onClick={() => onLeft()}>Неверно</NoButton>
          <YesButton onClick={() => onRight()}>Верно</YesButton>
        </ButtonsBlock>
      </Pane>
    </SprintSection>
  );
};
