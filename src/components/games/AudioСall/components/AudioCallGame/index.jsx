import React, { useState, useEffect, useCallback } from 'react';
import {
  Score,
  GameContent,
  StyledContent,
  StyledWordsContainer,
  StyledWord,
  StyledAnswerContent,
  StyledButtonBlock,
  StyledDescription,
  StyledHideDiv,
} from './styled';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
} from 'components/games/components/startPage/styled';
import './styles.css';
import { Button } from 'components/button';
import PropTypes from 'prop-types';
import { StyledLoader } from 'components/loader';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import GameOver from 'components/games/components/gameOver';

const audioCorrectAnswer = new Audio('audio/correct.mp3');
const audioWrongAnswer = new Audio('audio/wrong.mp3');
const audioNoAnswer = new Audio('audio/noAnswer.wav');
const baseUrl = process.env.REACT_APP_APIURL;

export default function AudioСall({ level }) {
  const handle = useFullScreenHandle();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(null); // список из 5 слов для игры
  const [rightWord, setRightWord] = useState(null); // произнесенное слово
  const [isAttemptToAnswer, setIsAttemptToAnswer] = useState(false); //ответ пользователя получен
  const [wordsInRound, setWordsInRound] = useState(10);
  const [isGameOver, setGameOver] = useState(false);
  const [srcImage, setSrcImage] = useState('');
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [gameOverStat, setGameOverStat] = useState([]);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const fetchDataLink = (level, page) =>
    `${baseUrl}/words?group=${level}&page=${page}`;

  const [url, setUrl] = useState(fetchDataLink(level, 1));

  useEffect(() => {
    fetch(url)
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
  }, [url]);

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  useEffect(() => {
    const listOfFiveWords = [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setWords(listOfFiveWords);
    setRightWord(listOfFiveWords[getRandomInt(5)]);
    setIsAttemptToAnswer(false);
    setIsSoundPlay(true);
  }, [items]);

  const gameOver = useCallback(() => {
    setGameOver(true);
  }, []);

  useEffect(() => {
    if (wordsInRound === 0) {
      gameOver();
    }
  }, [isGameOver, wordsInRound, gameOver]);

  function AttemptToAnswer(word) {
    if (isAttemptToAnswer) {
      return;
    }

    if (word.id === rightWord.id) {
      audioCorrectAnswer.play();
      setScore(score + 10);
      setRightAnswers(rightAnswers + 1);
      getGameOverStat(true);
    } else {
      audioWrongAnswer.play();
      setWrongAnswers(wrongAnswers + 1);
      getGameOverStat(false);
    }
    setWordsInRound(wordsInRound - 1);
    setIsAttemptToAnswer(true);
  }

  const playSound = useCallback(() => {
    if (rightWord) {
      const audioPlay = new Audio(`${baseUrl}/${rightWord.audio}`);
      setSrcImage(`${baseUrl}/${rightWord.image}`);
      audioPlay.volume = 1;
      audioPlay.play();
    }
  }, [rightWord]);

  if (rightWord && isSoundPlay) {
    playSound();
    setIsSoundPlay(false);
  }

  const getGameOverStat = useCallback(
    (isCorrect) => {
      setGameOverStat([
        ...gameOverStat,
        {
          word: rightWord.word,
          id: rightWord.id,
          audio: rightWord.audio,
          wordTranslate: rightWord.wordTranslate,
          isCorrect: isCorrect,
        },
      ]);
    },
    [gameOverStat, rightWord]
  );

  useEffect(() => {
    localStorage.setItem('gameOverStat', JSON.stringify(gameOverStat));
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <StyledSection>
        <StyledVideo src="video/video.mp4" autoPlay loop muted />

        <FullScreen handle={handle}>
          <StyledContainer>
            <StyledContent id="fullscreen-component">
              {isGameOver ? (
                <GameOver
                  rightAnswers={rightAnswers}
                  wrongAnswers={wrongAnswers}
                  gameOverStat={gameOverStat}
                />
              ) : null}
              <button
                className="fullscreen_bttn"
                title="Разверни игру на весь экран"
                onClick={handle.enter}
              >
                <i className="fas fa-expand-arrows-alt" />
              </button>
              <StyledDescription>
                Выбери правильный перевод слова после воспроизведения аудио
              </StyledDescription>

              <Score> Очки: {score} из 100</Score>

              <GameContent>
                <StyledHideDiv>
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
                </StyledHideDiv>

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
                          {word.id === rightWord.id && isAttemptToAnswer
                            ? '☑'
                            : index + 1}
                          &nbsp;
                          {word.wordTranslate}
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
                      setUrl(fetchDataLink(level, getRandomInt(30)));
                    } else if (wordsInRound) {
                      audioNoAnswer.play();
                      setIsAttemptToAnswer(true);
                      setWordsInRound(wordsInRound - 1);
                      getGameOverStat(false);
                    }
                    !wordsInRound ? setGameOver(true) : setGameOver(false);
                  }}
                >
                  {isAttemptToAnswer ? 'Дальше' : 'Не знаю'}
                </Button>
              </StyledButtonBlock>
            </StyledContent>
          </StyledContainer>
        </FullScreen>
      </StyledSection>
    );
  }
}

AudioСall.defaultProps = {
  level: '',
};

AudioСall.propTypes = {
  level: PropTypes.string,
};
