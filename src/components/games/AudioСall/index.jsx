import React, { useState, useEffect, useCallback } from 'react';
import { Pane, Score, AudioCallSection } from './styled'; //временно взято из Savanna
import './styles.css';
import { Button } from 'components/button';

const audioCorrectAnswer = new Audio('audio/correct.mp3');
const audioWrongAnswer = new Audio('audio/wrong.mp3');

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

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const fetchDataLink = `${baseUrl}words?group=1&page=1`;

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
  }, []);

  useEffect(() => {
    const listOfFiveWords = [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setWords(listOfFiveWords);
    setRightWord(listOfFiveWords[getRandomInt(5)]);
    setIsAttemptToAnswer(false);
  }, [items]);

  const AttemptToAnswer = (word) => {
    if (word.id === rightWord.id) {
      audioCorrectAnswer.play();
      setScore(score + 10);
    } else {
      audioWrongAnswer.play();
    }
    setWordsInRound(wordsInRound - 1);
    setIsAttemptToAnswer(true);
  };

  const playSound = useCallback(() => {
    if (rightWord) {
      const pronounce = new Audio(`${baseUrl}${rightWord.audio}`);
      setSrcImage(`${baseUrl}${rightWord.image}`);
      pronounce.volume = 0.05;
      pronounce.play();
    }
  }, [rightWord]);

  /*if (rightWord && shouldSoundBePlayed) {
    playSound();
    setShouldSoundBePlayed(false);
  }*/
  /*function turnOffSound() {
    wordSound.stop();
  }

  useEffect(() => {
    if (!isAudioPlaying) {
      turnOffSound();
    }
    playWordSound();
  }, [isAudioPlaying]);*/

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <AudioCallSection>
        <p>Выбери правильный перевод слова после воспроизведения аудио</p>
        <Score> Очки:{score} из 100</Score>

        <Pane>
          <div className="cards">
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

            {words &&
              words.map((word, index) => {
                return (
                  <p
                    className={
                      word.id !== rightWord.id && isAttemptToAnswer
                        ? 'wrongAnswer'
                        : ''
                    }
                    key={word.id}
                    onClick={() => AttemptToAnswer(word)}
                  >
                    {index + 1} {word.wordTranslate}
                  </p>
                );
              })}
          </div>
          <Button
            buttonStyle="btn--light"
            buttonSize="btn--large"
            onClick={() => {
              if (isAttemptToAnswer) {
                console.log('следующий набор');
              } else if (wordsInRound) {
                audioWrongAnswer.play();
                setIsAttemptToAnswer(true);
                setWordsInRound(wordsInRound - 1);
              }
              !wordsInRound ? setGameOver(true) : setGameOver(false);
            }}
          >
            {isAttemptToAnswer ? 'Дальше' : 'Не знаю'}
          </Button>
        </Pane>
      </AudioCallSection>
    );
  }
}
