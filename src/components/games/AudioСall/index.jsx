import React, { useState, useEffect, useCallback } from 'react';
import {
  Pane, //временно взято из Savanna
  Score, //временно взято из Savanna
  AudioCallSection, //временно взято из Savanna
  GameContent,
  StyledWordsContainer,
  StyledWord,
  StyledAnswerContent,
  StyledButtonBlock,
} from './styled';
import './styles.css';
import { Button } from 'components/button';

import { StyledLoader } from '../../../components/loader';

export default function AudioСall() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(null); // список из 5 слов для игры
  const [rightWord, setRightWord] = useState(null); // произнесенное слово
  const [isAttemptToAnswer, setIsAttemptToAnswer] = useState(false); //ответ пользователя получен
  const [wordsInRound, setWordsInRound] = useState(10);
  const [IsGameOver, setGameOver] = useState(false);
  const [srcImage, setSrcImage] = useState('');
  const [isSoundPlay, setIsSoundPlay] = useState(true);

  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const fetchDataLink = `${baseUrl}words?group=1&page=1`;

  const audioCorrectAnswer = new Audio('audio/correct.mp3');
  const audioWrongAnswer = new Audio('audio/wrong.mp3');
  const audioNoAnswer = new Audio('audio/noAnswer.wav');

  useEffect(() => {
    fetch(fetchDataLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [fetchDataLink]);

  useEffect(() => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const listOfFiveWords = [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setWords(listOfFiveWords);
    setRightWord(listOfFiveWords[getRandomInt(5)]);
    setIsAttemptToAnswer(false);
    setIsSoundPlay(true);
  }, [items]);

  useEffect(() => {
    if (wordsInRound === 0) {
      setGameOver(true);
    }
  }, [IsGameOver, wordsInRound]);

  function AttemptToAnswer(word) {
    if (isAttemptToAnswer) {
      return;
    }

    if (word.id === rightWord.id) {
      audioCorrectAnswer.play();
      setScore(score + 10);
    } else {
      audioWrongAnswer.play();
    }
    setWordsInRound(wordsInRound - 1);
    setIsAttemptToAnswer(true);
  }

  const playSound = useCallback(() => {
    if (rightWord) {
      const audioPlay = new Audio(`${baseUrl}${rightWord.audio}`);
      setSrcImage(`${baseUrl}${rightWord.image}`);
      audioPlay.volume = 1;
      audioPlay.play();
    }
  }, [rightWord]);

  if (rightWord && isSoundPlay) {
    playSound();
    setIsSoundPlay(false);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <AudioCallSection>
        <p>Выбери правильный перевод слова после воспроизведения аудио</p>
        <Score> Очки:{score} из 100</Score>

        <Pane>
          <GameContent>
            <img
              className={isAttemptToAnswer ? 'hideImg' : 'volumeIcon'}
              onClick={() => {
                playSound();
              }}
              src="images/volume.svg"
              alt="volume_icon"
            />
            <img
              className={isAttemptToAnswer ? '' : 'hideImg'}
              src={srcImage}
              alt="meaning_img"
            />
            <div className={isAttemptToAnswer ? 'answer' : 'answerHide'}>
              <img
                onClick={() => playSound()}
                className="volumeIconSmall"
                src="images/volume.svg"
                alt="sound"
              />
              <StyledAnswerContent>
                {rightWord && rightWord.word}
              </StyledAnswerContent>
            </div>

            <StyledWordsContainer>
              {words &&
                words.map((word, index) => {
                  return (
                    <StyledWord
                      id={
                        word.id !== rightWord.id && isAttemptToAnswer
                          ? 'wrongAnswer'
                          : ''
                      }
                      key={word.id}
                      onClick={() => AttemptToAnswer(word)}
                    >
                      {index + 1} {word.wordTranslate}
                    </StyledWord>
                  );
                })}
            </StyledWordsContainer>
          </GameContent>
          <StyledButtonBlock>
            <Button
              buttonStyle="btn--light"
              buttonSize="btn--large"
              onClick={() => {
                if (isAttemptToAnswer) {
                  console.log('следующий набор');
                } else if (wordsInRound) {
                  audioNoAnswer.play();
                  setIsAttemptToAnswer(true);
                  setWordsInRound(wordsInRound - 1);
                }
                !wordsInRound ? setGameOver(true) : setGameOver(false);
              }}
            >
              {isAttemptToAnswer ? 'Дальше' : 'Не знаю'}
            </Button>
          </StyledButtonBlock>
        </Pane>
      </AudioCallSection>
    );
  }
}
