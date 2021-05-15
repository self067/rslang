import React, { useState, useEffect } from 'react';
import { useSpring, a } from 'react-spring';
import {
  Container,
  Words,
  Word,
  SpecialWord,
  Score,
} from './SavannaGame.styled';
import GameLife from '../GameLife';
import Stone from './components/Stone';
import GameLoader from '../GameLoader';
import throttleFunction from 'utils/throttleFunction';
import GameOver from '../gameOver';
import {
  StyledSection,
  StyledVideo,
} from 'components/games/components/startPage/styled';

const TIME_TO_CHANGE_WORDS = 1500;
const URL = process.env.REACT_APP_APIURL;

// example getRandomInt(5)
// number range from 0 to 4 inclusively
const getRandomInt = (max, from = 0) => {
  return Math.floor(Math.random() * max + from);
};

const getSpecificWords = (wordOffsetValue) => {
  let currentWordOffsetValue = 0;

  return (words) => {
    const fallbackValue = { partOfWordsToShowOnScreen: null, guessWord: null };
    if (!words) return fallbackValue;
    const partOfWordsToShowOnScreen = words.slice(
      currentWordOffsetValue,
      wordOffsetValue + currentWordOffsetValue
    );
    const rand = getRandomInt(wordOffsetValue);
    const guessWord = partOfWordsToShowOnScreen[rand];
    currentWordOffsetValue += wordOffsetValue;
    if (!partOfWordsToShowOnScreen.length && !guessWord) return fallbackValue;
    return { partOfWordsToShowOnScreen, guessWord };
  };
};

const getWordsToGuessFrom = getSpecificWords(5);
const throttle = throttleFunction(TIME_TO_CHANGE_WORDS);

const Index = ({ level = 0 }) => {
  const [stopTimer, setStopTimer] = useState(false);
  const [lives, setLives] = useState(4);
  const [wordsList, setWordList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailedToFetch, setIsFailedToFetch] = useState(false);
  const [score, setScore] = useState(-1);
  const [rightAnswersChain, setRightAnswersChain] = useState(0);
  const [{ partOfWordsToShowOnScreen, guessWord }, setSelectedWords] = useState(
    {
      partOfWordsToShowOnScreen: null,
      guessWord: null,
    }
  );
  const [rightWords, setRightWords] = useState(0);
  const [wrongWords, setWrongWords] = useState(0);
  const [gameOverStat, setGameOverStat] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [wordsInRound, setWordsInRound] = useState(35);

  useEffect(() => {
    fetch(`${URL}/words?group=${level}&page=${getRandomInt(5)}`)
      .then((res) => res.json())
      .then((words) => setWordList(words))
      .catch(() => setIsFailedToFetch(true))
      .finally(() => setIsLoaded(true));

    fetch(`${URL}/words?group=${level}&page=${getRandomInt(10, 5)}`)
      .then((res) => res.json())
      .then((words) => setWordList((prevWords) => [...prevWords, ...words]))
      .catch(() => setIsFailedToFetch(true))
      .finally(() => setIsLoaded(true));
  }, [level]);

  const onFinishTimer = () => {
    setStopTimer(true);
  };

  const { x } = useSpring({
    pause: !stopTimer,
    to: { x: 90 },
    from: { x: 0 },
    config: { duration: 10000 },
  });

  const AnimatedWord = a(SpecialWord);

  const checkWord = (word) => {
    return () => {
      throttle(() => {
        if (word?.id === guessWord?.id) {
          setScore((score) => (score === -1 ? 20 : score + 20));
          setRightWords((rightWord) => rightWord + 1);
          setGameOverStat((prevWords) => [
            ...prevWords,
            { ...word, isCorrect: true },
          ]);
          setRightAnswersChain((rightAnswerChain) => rightAnswerChain + 1);
        } else {
          setLives((lives) => lives - 1);
          setScore((score) => (score === -1 ? -5 : score - 5));
          setWrongWords((wrongWord) => wrongWord + 1);
          setGameOverStat((prevWords) => [
            ...prevWords,
            { ...word, isCorrect: false },
          ]);
          setRightAnswersChain(0);
        }
        setWordsInRound((roundWords) => roundWords - 5);
      });
    };
  };

  useEffect(() => {
    sessionStorage.setItem(
      'savannaStat',
      JSON.stringify([rightWords, rightAnswersChain])
    );
  }, [rightWords, rightAnswersChain]);

  useEffect(() => {
    if (wordsList?.length > 0) {
      setSelectedWords(getWordsToGuessFrom(wordsList));
    }
  }, [wordsList]);

  useEffect(() => {
    x.start({
      pause: !stopTimer,
      from: { x: 0 },
      to: { x: 90 },
      onRest: ({ finished }) => {
        if (finished) {
          setLives((lives) => lives - 1);
          setScore((score) => (score === -1 ? -5 : score - 5));
        }
      },
    });
  }, [stopTimer, partOfWordsToShowOnScreen, x]);

  useEffect(() => {
    if (score !== -1) {
      const ref = setTimeout(() => {
        setSelectedWords(getWordsToGuessFrom(wordsList));
      }, TIME_TO_CHANGE_WORDS);

      return () => clearTimeout(ref);
    }
  }, [score, wordsList]);

  useEffect(() => {
    if (wordsInRound === 0 || lives === 0) {
      const ref = setTimeout(() => setGameOver(true), TIME_TO_CHANGE_WORDS);
      return () => clearTimeout(ref);
    }
  }, [wordsInRound, lives]);

  if (isFailedToFetch) {
    return (
      <Container>
        Что-то пошло не так! Попробуйте перезагрузить страницу :)
      </Container>
    );
  }

  if (!isLoaded) {
    return <Container>Скоро вы увидете слова </Container>;
  }

  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <Container>
        {!stopTimer && <GameLoader time={3} onFinish={onFinishTimer} />}
        {stopTimer && <GameLife currentNumberOfLives={lives} totalLives={4} />}
        {isGameOver && (
          <GameOver
            gameOverStat={gameOverStat}
            rightAnswers={rightWords}
            wrongAnswers={wrongWords}
          />
        )}
        <Score>
          Очки: {score === -1 ? 0 : score <= 0 ? 'Могло быть лучше' : score}
        </Score>
        <AnimatedWord
          style={{
            top: x.to((deltaX) => `${deltaX}%`),
          }}
        >
          {guessWord?.word}
        </AnimatedWord>
        <Words>
          {partOfWordsToShowOnScreen?.map((word) => (
            <Word key={word.id} onClick={checkWord(word)}>
              {word.wordTranslate}
            </Word>
          ))}
        </Words>
        <Stone />
      </Container>
    </StyledSection>
  );
};

export default Index;
