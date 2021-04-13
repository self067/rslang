import React, { useState, useEffect } from 'react';
import { useSpring, a } from 'react-spring';
import { Container, Words, Word, SpecialWord } from './SavannaGame.styled';
import GameLife from '../GameLife';
import Stone from './components/Stone';
import GameLoader from '../GameLoader';
import throttleFunction from 'utils/throttleFunction';

const TIME_TO_CHANGE_WORDS = 1500;
const URL = process.env.REACT_APP_APIURL;

// example getRandomInt(5)
// number range from 0 to 4 inclusively
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getSpecificWords = (wordOffsetValue) => {
  let currentWordOffsetValue = 0;

  return (words) => {
    const fallbackValue = { partOfWordsToShowOnScreen: null, guessWord: null };
    if (!words) return fallbackValue;
    const partOfWordsToShowOnScreen = words.slice(currentWordOffsetValue, wordOffsetValue + currentWordOffsetValue);
    if (currentWordOffsetValue === 20) currentWordOffsetValue = 0;
    const rand = getRandomInt(wordOffsetValue);
    const guessWord = partOfWordsToShowOnScreen[rand];
    currentWordOffsetValue += wordOffsetValue;
    if (!partOfWordsToShowOnScreen.length && !guessWord) return fallbackValue;
    return { partOfWordsToShowOnScreen, guessWord };
  };
}

const getWordsToGuessFrom = getSpecificWords(5);
const throttle = throttleFunction(1000);

const Index = ({ level }) => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [lives, setLives] = useState(5);
  const [wordsList, setWordList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailedToFetch, setIsFailedToFetch] = useState(false);
  const [score, setScore] = useState(-1);
  const [{ partOfWordsToShowOnScreen, guessWord }, setSelectedWords] = useState({ partOfWordsToShowOnScreen: null, guessWord: null });
  const [chosenButton, setChosenButton] = useState(false);

  useEffect(() => {
    fetch(`${URL}/words?group=${level}&page=1`)
      .then((res) => res.json())
      .then((words) => setWordList(words))
      .catch(() => setIsFailedToFetch(true))
      .finally(() => {
        setIsLoaded(true);
        setIsFirstRender(true);
      });
  }, []);

  const onFinishTimer = () => {
    setStopTimer(true);
  };
  //
  // useEffect(() => {
  //   console.log(wordsList);
  //   return () => {
  //     console.log(wordsList, 'unmount');
  //   }
  // }, [wordsList]);

  const { x } = useSpring({
    pause: !stopTimer,
    to: { x: 90 },
    from: { x: 0 },
    config: { duration: 10000 },
    onRest: ({ finished }) => {
      if (finished) {
        setLives((lives) => lives - 1);
        setScore((score) => score === -1 ? -20 : score - 20);
      }
    }
  });

  const AnimatedWord = a(SpecialWord);

  const checkWord = ({ id }) => {
    return () => {
        throttle(() => {
          if (id === guessWord?.id) {
            setScore((score) => score === -1 ? 20 : score + 20);
          } else {
            setLives((lives) => lives - 1);
            setScore((score) => score === -1 ? -20 : score - 20);
          }
        });

        if (!chosenButton) {
          setChosenButton(id);
        }
    };
  };

  useEffect(() => {
    if (wordsList?.length > 0) {
      setSelectedWords(getWordsToGuessFrom(wordsList));
    }
  }, [wordsList]);

  useEffect(() => {
    if (isFirstRender && wordsList?.length > 0 && (partOfWordsToShowOnScreen === null && guessWord === null) && lives > 0) {
      fetch(`${URL}/words?group=${level}&page=2`)
        .then((res) => res.json())
        .then((words) => setWordList(words))
        .catch(() => setIsFailedToFetch(true))
        .finally(() => {
          setIsLoaded(true);
          setIsFirstRender(false);
        });
    }
  }, [isFirstRender, wordsList, partOfWordsToShowOnScreen, guessWord, lives]);

  useEffect(() => {
    x.start({
      pause: false,
      from: { x: 0 },
      to: { x: 90 },
    })
  }, [partOfWordsToShowOnScreen, x]);

  useEffect(() => {
    if (score !== -1) {
      const ref = setTimeout(() => {
        setSelectedWords(getWordsToGuessFrom(wordsList));
      }, TIME_TO_CHANGE_WORDS);

      return () => clearTimeout(ref);
    }
  }, [score, wordsList]);

  if (isFailedToFetch) {
    return <Container>Что-то пошло не так! Попробуйте перезагрузить страницу :)</Container>;
  }

  if (!isLoaded) {
    return <Container>Скоро вы увидете слова :)</Container>;
  }

  return (
    <Container>
      {!stopTimer && <GameLoader time={3} onFinish={onFinishTimer} />}
      {stopTimer && <GameLife currentNumberOfLives={lives} />}
      <AnimatedWord
        style={{
          top: x.to((deltaX) => `${deltaX}%`),
        }}
      >
        {guessWord?.word}
      </AnimatedWord>
      <Words>
        {partOfWordsToShowOnScreen?.map((word) => (
          <Word key={word.id} style={{background: chosenButton === word.id ? '#135EA3' : '' }} onClick={checkWord(word)}>
            {word.wordTranslate}
          </Word>
        ))}
      </Words>
      <Stone />
    </Container>
  );
};

export default Index;
