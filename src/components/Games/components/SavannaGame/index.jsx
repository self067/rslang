import React, { useState, useEffect } from 'react';
import { useSpring, a } from 'react-spring';
import { Container, Words, Word, SpecialWord } from './SavannaGame.styled';
import GameLife from '../GameLife';
import Stone from './components/Stone';
import GameLoader from '../GameLoader';
import throttleFunction from 'hooks/useThrottling';

// example getRandomInt(5)
// number range from 0 to 4 inclusively
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getSpecificWords = (wordOffsetValue) => {
  let currentWordOffsetValue = 0;

  return (words) => {
    if (!words) return { partOfWordsToShowOnScreen: null, guessWord: null };
    const partOfWordsToShowOnScreen = words.slice(currentWordOffsetValue, wordOffsetValue + currentWordOffsetValue);
    const rand = getRandomInt(wordOffsetValue);
    const guessWord = partOfWordsToShowOnScreen[rand];
    currentWordOffsetValue += wordOffsetValue;
    return { partOfWordsToShowOnScreen, guessWord };
  };
}

const foo = getSpecificWords(5);
const throttle = throttleFunction(1000);

const Index = () => {
  const [stopTimer, setStopTimer] = useState(false);
  const [lives, setLives] = useState(5);
  const [wordsList, setWordList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailedToFetch, setIsFailedToFetch] = useState(false);
  const [score, setScore] = useState(0);
  const [{ partOfWordsToShowOnScreen, guessWord }, setSelectedWords] = useState({ partOfWordsToShowOnScreen: null, guessWord: null });
  const [chosenButton, setChosenButton] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/words?group=0&page=1`)
      .then((res) => res.json())
      .then((words) => setWordList(words))
      .catch(() => setIsFailedToFetch(true))
      .finally(() => setIsLoaded(true));
  }, []);

  const onFinishTimer = () => {
    setStopTimer(true);
  };

  const { x } = useSpring({
    pause: !stopTimer,
    to: { x: 90 },
    from: { x: 0 },
    config: { duration: 10000 },
    onRest: ({ finished }) => {
      if (finished) {
        setLives((lives) => lives - 1);
        setScore((score) => score - 20);
      }
    }
  });

  const AnimatedWord = a(SpecialWord);

  const checkWord = ({ id }) => {
    return () => {
      throttle(() => {
        if (id === guessWord?.id) {
          setScore((score) => score + 20);
        } else {
          setLives((lives) => lives - 1);
          setScore((score) => score - 20);
        }
      });

      if (!chosenButton) {
        setChosenButton(id);
      }
    };
  };

  useEffect(() => {
    if (wordsList?.length > 0) {
      setSelectedWords(foo(wordsList));
    }
  }, [wordsList]);

  useEffect(() => {
    x.start({
      pause: false,
      from: { x: 0 },
      to: { x: 90 },
    })
  }, [partOfWordsToShowOnScreen, x]);

  useEffect(() => {
    if (score !== 0) {
      const ref = setTimeout(() => {
        setSelectedWords(foo(wordsList));
      }, 1500);

      return () => {
        clearTimeout(ref);
      }
    }
  }, [score, wordsList]);

  useEffect(() => {
    console.log(chosenButton);
  }, [chosenButton]);

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
