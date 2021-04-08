import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'components/button';
import {
  SModal,
  ModalTitle,
  ModalInfo,
  ModalSubtitle,
  StyledImg,
  StyledResults,
  StyledVolumeIcon,
  StyledWords,
  StyledWordElem,
} from './styled';
import './styles.css';

const baseUrl = process.env.REACT_APP_APIURL;

export default function GameOver({ rightAnswers, wrongAnswers, gameOverStat }) {
  function playAudio(audio) {
    const audioPlay = new Audio(`${baseUrl}/${audio}`);
    audioPlay.volume = 1;
    audioPlay.play();
  }

  return (
    <SModal isOpen={true} contentLabel="Game over Modal">
      <ModalTitle>Твои результаты</ModalTitle>
      <ModalInfo>
        <ModalSubtitle>
          <StyledResults>Знаешь: {rightAnswers}</StyledResults>

          <StyledResults>Ошибок: {wrongAnswers}</StyledResults>
        </ModalSubtitle>
        <ModalSubtitle>
          <StyledWords>
            {gameOverStat.map(
              ({ id, audio, word, wordTranslate, isCorrect }) => (
                <StyledWordElem key={id}>
                  <StyledVolumeIcon
                    onClick={() => {
                      playAudio(audio);
                    }}
                    src="images/volume_dark.png"
                    alt="volume_icon"
                  />

                  <p className={isCorrect ? 'correct' : 'wrong'}>{word} - </p>
                  <p
                    className={
                      isCorrect ? 'correctTranslate' : 'wrongTranslate'
                    }
                  >
                    {wordTranslate}
                  </p>
                </StyledWordElem>
              )
            )}
          </StyledWords>
        </ModalSubtitle>

        <Link to="/dictionary">
          <Button buttonStyle="btn--dark" buttonSize="btn--large">
            Продолжить обучение
          </Button>
        </Link>
      </ModalInfo>
      <StyledImg src="images/characters/18.png" alt="character" />
    </SModal>
  );
}

GameOver.defaultProps = {
  rightAnswers: 0,
  wrongAnswers: 0,
  gameOverStat: [],
};
GameOver.propTypes = {
  rightAnswers: PropTypes.number,
  wrongAnswers: PropTypes.number,
  gameOverStat: PropTypes.array,
};
