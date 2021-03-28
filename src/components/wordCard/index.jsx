import React, { useState } from 'react';
import './styles.css';
import { AudioIcon, CloseIcon } from '../FontAwesomeIcons/FontAwesomeIcons';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
const WordCard = ({
  transcription,
  translation,
  word,
  meaningTextTranslated,
  meaningText,
  textExample,
  textExampleTranslated,
  card,
  setCard,
  imageSrc,
  wordSoundSrc,
  exampleSoundSrc,
  meaningSoundSrc,
}) => {
  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const [openedCard, setOpenedCard] = useState(false);
  const [playWordSound, wordSound] = useSound(baseUrl + wordSoundSrc);
  const [playMeaningSound, meaningSound] = useSound(baseUrl + meaningSoundSrc);
  const [playExampleSound, exampleSound] = useSound(baseUrl + exampleSoundSrc);
  const [isAudioStopped, stopAudio] = useState(false);
  let cardClassName = 'card';
  if (word === card) {
    cardClassName += ' is-expanded';
  } else if (card !== null) {
    cardClassName += ' is-collapsed is-inactive';
  } else {
    cardClassName += ' is-collapsed';
  }

  function toggleCardState(e) {
    if (word === card) {
      setOpenedCard(false);
      setCard(null);
    } else if (card === null) {
      // если никакая другая карта не открыта
      setOpenedCard(true); // для рендера панели карточки
      setCard(word); // при нажатии на другие карты панель не будет открываться
    }
  }

  function audioClickHandler() {
    if (
      wordSound.isPlaying ||
      meaningSound.isPlaying ||
      exampleSound.isPlaying
    ) {
      stopAudio(true);
      wordSound.stop();
      meaningSound.stop();
      exampleSound.stop();
      console.log(isAudioStopped);
    } else {
      playWordSound();
      setTimeout(() => {
        playMeaningSound();
      }, wordSound.duration + 500);

      setTimeout(() => {
        playExampleSound();
      }, wordSound.duration + meaningSound.duration + 500);
    }
  }

  return (
    <div className={cardClassName}>
      <div className="card__inner js-expander" onClick={toggleCardState}>
        <span>{word}</span>
      </div>
      {openedCard && (
        <div className="card__expander">
          <div className="card__section section__image-results">
            <img src={imageSrc} className="card__image" alt={word} />
            <div className="game-result">
              <div className="game-result__row">
                Угадано: <span id="guessed-number">3</span> раз(а)
              </div>
              <div className="game-result__row">
                Не угадано: <span id="unguessed-number">0</span> раз(а)
              </div>
            </div>
          </div>
          <div className="card__section section__text-content">
            <div className="card__header">
              <h2 className="card__title">{word}</h2>
              <i
                className="card__audio-btn"
                onClick={() => {
                  audioClickHandler();
                }}
              >
                {AudioIcon}
              </i>
            </div>

            <div className="card__transcription">{transcription}</div>
            <div className="card__translation">{translation}</div>
            <h3 className="card__subtitle"> Значение: </h3>
            <p className="card__text">{meaningText}</p>
            <p className="card__text">{meaningTextTranslated}</p>
            <h3 className="card__subtitle"> Пример: </h3>
            <p className="card__text">{textExample}</p>
            <p className="card__text">{textExampleTranslated}</p>
            <i className="card__close-btn" onClick={toggleCardState}>
              {CloseIcon}
            </i>
          </div>
          <div className="card__section">
            <button className="card__add-to-btn blue">В сложные слова</button>
            <button className="card__add-to-btn red">В удаленные слова</button>
          </div>
        </div>
      )}
    </div>
  );
};

WordCard.defaultProps = {
  transcription: '',
  translation: '',
  word: '',
  meaningTextTranslated: '',
  meaningText: '',
  textExample: '',
  textExampleTranslated: '',
  card: null,
  setCard: () => {},
  imageSrc: '',
  wordSoundSrc: '',
  exampleSoundSrc: '',
  meaningSoundSrc: '',
};

WordCard.propTypes = {
  transcription: PropTypes.string,
  translation: PropTypes.string,
  word: PropTypes.string,
  meaningTextTranslated: PropTypes.string,
  meaningText: PropTypes.string,
  textExample: PropTypes.string,
  textExampleTranslated: PropTypes.string,
  card: PropTypes.string,
  setCard: PropTypes.func,
  imageSrc: PropTypes.string,
  wordSoundSrc: PropTypes.string,
  exampleSoundSrc: PropTypes.string,
  meaningSoundSrc: PropTypes.string,
};
export default WordCard;
