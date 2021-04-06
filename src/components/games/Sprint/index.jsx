import React, { useState, useEffect } from 'react';
import { Timer } from '../components/Timer';
import { StyledLoader } from 'components/loader';
import {
  Pane,
  Score,
  SprintSection,
  NoButton,
  YesButton,
  Card,
  PandaTop,
  Wrapper,
  BoxColor,
  CheckBoxes,
  ButtonsBox,
  PandaBox,
  PandaBottom,
  PandaImg,
  WordScore,
  WordsBox,
  TextCard,
  Img2,
  ArrowImg,
  ResultImg,
} from './styled';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

let curWord = 0;

export const Sprint = () => {
  const handle = useFullScreenHandle();
  const [score, setScore] = useState(0);
  const [resetTimerRequested, setResetTimer] = useState(false);
  const [words, setWords] = useState(null);
  const [wrongWords, setWrongWords] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(Math.floor(Math.random() * 30));
  const [group, setGroup] = useState(0);
  const [error, setError] = useState(null);
  const [currentWord, setCurrentWord] = useState(0);

  const wrongPage = page > 15 ? page - 2 : page + 2;
  const truth = !!Math.floor(Math.random() * 2);

  console.log('truth=', truth ? 'true' : 'false');

  const timerCount = 10;

  const apiurl = process.env.REACT_APP_APIURL;
  const wordsUrl = `${apiurl}/words?group=${group}&page=${page}`;
  const wrongWordsUrl = `${apiurl}/words?group=${group}&page=${wrongPage}`;

  const onLeft = () => {
    console.log('onLeft', curWord);
    setCurrentWord(++curWord);
  };

  const onRight = () => {
    console.log('onRight', curWord);
    setCurrentWord(++curWord);
  };

  useEffect(() => {
    fetch(wordsUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWords(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [wordsUrl]);

  useEffect(() => {
    fetch(wrongWordsUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWrongWords(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [wrongWordsUrl]);

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

  // console.log(resetTimerRequested, words, wrongWords);
  const word = words ? words[currentWord]?.word : '';
  const wordTranslate = word;
  // truth
  //   ? words[currentWord]?.wordTranslate
  //   : wrongWords
  //   ? wrongWords[currentWord]?.wordTranslate
  //   : '';

  return error ? (
    <div>Error: {error.message}</div>
  ) : !isLoaded ? (
    <StyledLoader>Loading...</StyledLoader>
  ) : (
    <SprintSection>
      <FullScreen handle={handle}>
        <Score>{score}</Score>

        <Card>
          <PandaTop src="images/sprint/panda_pl.png" loading="lazy" alt="" />

          <Wrapper>
            <BoxColor>
              <WordScore>+ 80 очков за слово</WordScore>
              <CheckBoxes>
                <Img2 src="images/sprint/CHECK1.png" alt="" />
                <Img2 src="images/sprint/CHECK1.png" alt="" />
                <Img2 src="images/sprint/CHECK1.png" alt="" />
              </CheckBoxes>
            </BoxColor>

            <PandaBox>
              <PandaImg src="images/sprint/panda4.png" alt="" />
              <PandaImg src="images/sprint/panda3.png" alt="" />
              <PandaImg src="images/sprint/panda5.png" alt="" />
              <PandaImg src="images/sprint/panda1.png" alt="" />
            </PandaBox>
            <WordsBox>
              <TextCard>{word}</TextCard>
              <TextCard>{wordTranslate}</TextCard>
            </WordsBox>
          </Wrapper>
        </Card>

        <ButtonsBox>
          <ArrowImg src="images/sprint/arrow_l.png" alt="" />
          <NoButton onClick={() => onLeft()}>неверно</NoButton>
          <ResultImg src="images/sprint/CHECK1.png" alt="" />
          <YesButton onClick={() => onRight()}>верно</YesButton>
          <ArrowImg src="images/sprint/arrow_r.png" alt="" />
        </ButtonsBox>

        <PandaBottom src="images/sprint/panda_r.png" alt="" />

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
      </FullScreen>
    </SprintSection>
  );
};
