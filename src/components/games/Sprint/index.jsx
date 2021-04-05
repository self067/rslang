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

let curWord = 0;

export const Sprint = () => {
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
      <div class="section">
        <div class="header">30 000 очков</div>
        <div class="card">
          <img
            src="images/sprint/panda_pl.png"
            loading="lazy"
            alt=""
            class="panda_top"
          />
          <div class="wrapper">
            <div class="boxcolor">
              <div class="text">+ 80 очков за слово</div>
              <div class="checkbox">
                <img
                  src="images/sprint/CHECK1.png"
                  loading="lazy"
                  alt=""
                  class="image-2"
                />
                <img
                  src="images/sprint/CHECK1.png"
                  loading="lazy"
                  alt=""
                  class="image-2"
                />
                <img
                  src="images/sprint/CHECK1.png"
                  loading="lazy"
                  alt=""
                  class="image-2"
                />
              </div>
            </div>
            <div class="boxpanda">
              <img
                src="images/sprint/panda4.png"
                loading="lazy"
                alt=""
                class="panda"
              />
              <img
                src="images/sprint/panda3.png"
                loading="lazy"
                alt=""
                class="panda"
              />
              <img
                src="images/sprint/panda5.png"
                loading="lazy"
                alt=""
                class="panda"
              />
              <img
                src="images/sprint/panda1.png"
                loading="lazy"
                alt=""
                class="panda"
              />
            </div>
            <div class="boxwords">
              <div class="text-card">бамбук</div>
              <div class="text-card">bamboo</div>
            </div>
          </div>
        </div>
        <div class="buttonbox">
          <img src="/sprint/arrow_l.png" loading="lazy" alt="" class="arrow" />
          <a href="#" class="button w-button">
            верно
          </a>
          <img
            src="images/sprint/CHECK1.png"
            loading="lazy"
            alt=""
            class="image-3"
          />
          <a href="#" class="button red w-button">
            неверно
          </a>
          <img
            src="images/sprint/arrow_r.png"
            loading="lazy"
            alt=""
            class="arrow"
          />
        </div>
        <img
          src="images/sprint/panda_r.png"
          loading="lazy"
          alt=""
          class="panda_bottom"
        />
      </div>

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
