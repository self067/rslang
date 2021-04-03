import React, { useState, useEffect } from 'react';
import {
  Pane,
  Score,
  AudioCallSection,
  ButtonsBlock,
  NoButton,
  YesButton,
} from './styled';
import Word from './components/word';

const audioCorrectAnswer = new Audio('audio/correct.mp3');
const audioWrongAnswer = new Audio('audio/wrong.mp3');

export default function AudioCall() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(null); // список из 5 слов для игры
  const [rightWord, setRightWord] = useState(null); // произнесенное слово
  const [isAttemptToAnswer, setIsAttemptToAnswer] = useState(false); //ответ пользователя получен
  const [wordsInRound, setWordsInRound] = useState(10);
  //const [IsGameOver, setGameOver] = useState(false);

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
      setScore(score + 1);
    } else {
      audioWrongAnswer.play();
    }
    setWordsInRound(wordsInRound - 1);
    setIsAttemptToAnswer(true);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <AudioCallSection>
        <Score>{score}</Score>

        <Pane>
          <div className="cards">
            {words &&
              words.map((item) => {
                return (
                  <Word
                    word={item.word}
                    translation={item.wordTranslate}
                    imageSrc={baseUrl + item.image}
                    wordSoundSrc={item.audio}
                    key={item.id}
                  />
                );
              })}
          </div>
          <ButtonsBlock>
            <NoButton
              onClick={(e) => {
                console.log('onClick');
              }}
            >
              Неверно
            </NoButton>
            <YesButton
              onClick={(e) => {
                console.log('onClick');
              }}
            >
              Верно
            </YesButton>
          </ButtonsBlock>
        </Pane>
      </AudioCallSection>
    );
  }
}
