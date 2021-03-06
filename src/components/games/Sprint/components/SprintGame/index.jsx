import React, { useState, useEffect, useCallback } from 'react';
import { Timer } from '../../../components/Timer';
import { StyledLoader } from 'components/loader';
import {
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
import {
  StyledSection,
  StyledVideo,
} from 'components/games/components/startPage/styled';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

let curWord = 0;

const audioCorrectAnswer = new Audio('audio/correct.mp3');
const audioWrongAnswer = new Audio('audio/wrong.mp3');

export default function Sprint() {
  const handle = useFullScreenHandle();
  const [score, setScore] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [resetTimerRequested, setResetTimer] = useState(false);
  const [words, setWords] = useState(null);
  const [wrongWords, setWrongWords] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(Math.floor(Math.random() * 30));
  const [group, setGroup] = useState(0);
  const [error, setError] = useState(null);
  const [currentWord, setCurrentWord] = useState(0);
  const [addScore, setAddScore] = useState(0);
  const [checks, setChecks] = useState(0);

  const [rightAnswers, setRightAnswers] = useState(0);
  const [rightAnswersChain, setRightAnswersChain] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [gameOverStat, setGameOverStat] = useState([]);

  const wrongPage = page > 15 ? page - 2 : page + 2;

  const truth = !!Math.floor(Math.random() * 2);

  let timerCount = 60;

  const apiurl = process.env.REACT_APP_APIURL;
  const wordsUrl = `${apiurl}/words?group=${group}&page=${page}`;
  const wrongWordsUrl = `${apiurl}/words?group=${group}&page=${wrongPage}`;

  const nextWord = (rig) => {
    setCurrentWord(++curWord);

    if (rig) {
      setRightCount(rightCount + 1);
      setRightAnswers(rightAnswers + 1);
      setRightAnswersChain(rightAnswersChain + 1);
      audioCorrectAnswer.play();
      getGameOverStat(true);
      let ascore = addScore;
      if (checks < 3 && ascore < 3) setChecks(checks + 1);
      else {
        if (addScore < 3) {
          ascore = addScore + 1;
          setAddScore(ascore);
        }
        setChecks(1);
      }

      setScore(score + 2 ** ascore * 10);
    } else {
      setWrongCount(wrongCount + 1);
      setAddScore(0);
      setChecks(0);
      //setRightAnswersChain(0);
      setWrongAnswers(wrongAnswers + 1);
      audioWrongAnswer.play();
      getGameOverStat(false);
    }

    if (curWord > 19) {
      setPage(page > 28 ? 0 : page + 1);
      curWord = 0;
      setCurrentWord(curWord);
    }
  };

  const onLeft = () => {
    nextWord(!truth);
  };

  const onRight = () => {
    nextWord(truth);
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
          setWrongWords(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, [wrongWordsUrl]);

  useEffect(() => {
    if (resetTimerRequested) setResetTimer(true);
  }, [resetTimerRequested]);

  useEffect(() => {
    const listener = (e) => {
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        onLeft();
      }
      if (e.key === 'ArrowRight') {
        onRight();
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);

  const completeTimer = () => {};

  const resetTimer = () => {};

  const timerDuration = () => {};

  const word = words ? words[currentWord]?.word : '';
  const wordTranslate = truth
    ? words
      ? words[currentWord]?.wordTranslate
      : ''
    : wrongWords
    ? wrongWords[currentWord]?.wordTranslate
    : '';

  const Checks = () => {
    let res = [];
    if (addScore < 3) {
      for (let i = 0; i < checks; i++)
        res.push(<Img2 key={i} src="images/sprint/CHECK1.png" alt="" />);
      for (let i = checks; i < 3; i++)
        res.push(<Img2 key={i} src="images/sprint/CHECK0.png" alt="" />);
    } else res.push(<Img2 key={11} src="images/sprint/CHECK1.png" alt="" />);
    return <>{res}</>;
  };

  const PandasImgs = () => {
    let res = [];
    for (let i = 0; i <= addScore; i++)
      res.push(
        <PandaImg
          key={'panda' + i}
          src={'images/sprint/panda' + i + '.png'}
          alt=""
        />
      );
    return <>{res}</>;
  };

  useEffect(() => {
    let totalAmount, rightAnswersAmount, totalRightAnswersChain;
    if (localStorage.getItem('sprintGameStat')) {
      let gameStat = JSON.parse(localStorage.getItem('sprintGameStat'));
      totalAmount =
        +rightAnswers + +wrongAnswers + +gameStat.rightAnswersAmount;
      rightAnswersAmount = +rightAnswers + +gameStat.rightAnswersAmount;
      totalRightAnswersChain =
        rightAnswersChain > gameStat.totalRightAnswersChain
          ? rightAnswersChain
          : gameStat.totalRightAnswersChain;
    } else {
      totalAmount = +rightAnswers + +wrongAnswers;
      rightAnswersAmount = +rightAnswers;
      totalRightAnswersChain = +rightAnswersChain;
    }
    console.log(totalAmount);
    localStorage.setItem(
      'sprintGameStat',
      JSON.stringify({
        totalAmount: totalAmount,
        rightAnswersAmount: rightAnswersAmount,
        totalRightAnswersChain: totalRightAnswersChain,
      })
    );
  });

  const getGameOverStat = useCallback(
    (isCorrect) => {
      setGameOverStat([
        ...gameOverStat,
        {
          word: word,
          id: words[currentWord]?.id,
          audio: words[currentWord]?.audio,
          wordTranslate: wordTranslate,
          isCorrect: isCorrect,
        },
      ]);
    },
    [gameOverStat, word, words, currentWord]
  );

  return error ? (
    <div>Error: {error.message}</div>
  ) : !isLoaded ? (
    <StyledLoader>Loading...</StyledLoader>
  ) : (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <SprintSection>
        <FullScreen handle={handle}>
          <Score>{score}</Score>

          <Card>
            <PandaTop src="images/sprint/panda_pl.png" loading="lazy" alt="" />

            <Wrapper>
              <BoxColor>
                <WordScore>+ {2 ** addScore * 10} ?????????? ???? ??????????</WordScore>
                <CheckBoxes>
                  <Checks />
                </CheckBoxes>
              </BoxColor>

              <PandaBox>
                <PandasImgs />
              </PandaBox>
              <WordsBox>
                <TextCard>{word}</TextCard>
                <TextCard>{wordTranslate}</TextCard>
              </WordsBox>
            </Wrapper>
          </Card>

          <ButtonsBox>
            <ArrowImg src="images/sprint/arrow_l.png" alt="" />
            <NoButton onClick={() => onLeft()}>??????????????</NoButton>
            <ResultImg src="images/sprint/CHECK1.png" alt="" />
            <YesButton onClick={() => onRight()}>??????????</YesButton>
            <ArrowImg src="images/sprint/arrow_r.png" alt="" />
          </ButtonsBox>

          <PandaBottom src="images/sprint/panda_r.png" alt="" />

          <Timer
            outerColor="#643949"
            innerColor="#C3E1C9"
            countdownColor="#643949"
            timerCount={timerCount} // ???????????????????? ????????????
            displayCountdown={true}
            timerDuration={timerDuration} // callback ???? ???????????? ?????? ??????????????
            resetTimerRequested={resetTimerRequested}
            resetTimer={resetTimer}
            completeTimer={completeTimer} // callback ???? ?????????????????? ??????????????
            rightAnswers={rightAnswers}
            wrongAnswers={wrongAnswers}
            gameOverStat={gameOverStat}
          />
        </FullScreen>
      </SprintSection>
    </StyledSection>
  );
}
