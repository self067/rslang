import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../Auth/UserContext';
import './styles.css';
import {
  SoundOnIcon,
  SoundOffIcon,
  CloseIcon,
  HardWordIcon,
} from '../FontAwesomeIcons/FontAwesomeIcons';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
const WordCard = ({
  id,
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
  isChecked,
  cardColorStyle,
  wordDifficulty,
  pageNumber,
  setPageReload,
  pageReload,
  isHard,
}) => {
  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const [openedCard, setOpenedCard] = useState(false);
  const [playWordSound, wordSound] = useSound(baseUrl + wordSoundSrc);
  const [playMeaningSound, meaningSound] = useSound(baseUrl + meaningSoundSrc);
  const [playExampleSound, exampleSound] = useSound(baseUrl + exampleSoundSrc, {
    onend: () => {
      playAudio(false);
    },
  });
  const [isAudioPlaying, playAudio] = useState(false);
  const [timeoutId1, setTimeoutId1] = useState();
  const [timeoutId2, setTimeoutId2] = useState();
  const { userInfo } = useContext(UserContext);
  const [sentCardInfo, setSentCardInfo] = useState(null);
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

  function turnOffSound() {
    clearTimeout(timeoutId1);
    clearTimeout(timeoutId2);
    wordSound.stop();
    meaningSound.stop();
    exampleSound.stop();
  }

  useEffect(() => {
    if (!isAudioPlaying) {
      turnOffSound();
    } else {
      setTimeoutId1(
        setTimeout(() => {
          playMeaningSound();
        }, wordSound.duration + 500)
      );

      setTimeoutId2(
        setTimeout(() => {
          playExampleSound();
        }, wordSound.duration + meaningSound.duration + 500)
      );
      playWordSound();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    turnOffSound();
  }, [card]);

  useEffect(() => {
    if (sentCardInfo && userInfo) {
      console.log(sentCardInfo);
      console.log(`page - ${pageNumber.toString()}`);
      const url = `https://rslangbe-team105.herokuapp.com/users/${userInfo.userId}/words/${sentCardInfo['id']}`;
      const data = JSON.stringify({
        difficulty: wordDifficulty.toString(),
        optional: {
          isDeleted: sentCardInfo.isDeleted ? sentCardInfo.isDeleted : false,
          isHard: sentCardInfo.isHard ? sentCardInfo.isHard : false,
          page: pageNumber.toString(),
        },
      });
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: data,
      };
      console.log(data);
      fetch(url, options).then((data) => {
        if (!data.ok) {
          throw new Error(data.statusText);
        }
        // console.log(data);
      });
    }
  }, [sentCardInfo]);
  return (
    <div className={cardClassName}>
      <div
        className={'card__inner js-expander' + ` ${cardColorStyle}`}
        onClick={toggleCardState}
      >
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
                  playAudio(!isAudioPlaying);
                }}
              >
                {isAudioPlaying ? SoundOnIcon : SoundOffIcon}
              </i>
              {isHard ? (
                <i className="card__hard-word-icon" title="Сложное слово">
                  {HardWordIcon}
                </i>
              ) : null}
            </div>

            {isChecked['transcription'] ? (
              <div className="card__transcription">{transcription}</div>
            ) : null}

            {isChecked['wordTranslate'] ? (
              <div className="card__translation">{translation}</div>
            ) : null}
            <h3 className="card__subtitle"> Значение: </h3>
            <p
              dangerouslySetInnerHTML={{ __html: meaningText }}
              className="card__text"
            />
            {isChecked['definitionTranslate'] ? (
              <p className="card__text">{meaningTextTranslated}</p>
            ) : null}
            <h3 className="card__subtitle"> Пример: </h3>
            <p
              dangerouslySetInnerHTML={{ __html: textExample }}
              className="card__text"
            />
            {isChecked['sentenceTranslate'] ? (
              <p className="card__text">{textExampleTranslated}</p>
            ) : null}
            <i className="card__close-btn" onClick={toggleCardState}>
              {CloseIcon}
            </i>
          </div>

          <div className="card__section">
            {isChecked['difficultWords'] && userInfo ? (
              <button
                className="card__add-to-btn blue"
                id="addToHardBtn"
                onClick={(e) => {
                  setSentCardInfo({
                    id: id,
                    isHard: true,
                  });
                  setTimeout(() => {
                    toggleCardState();
                    setPageReload(!pageReload);
                  }, 2000);
                }}
              >
                В сложные слова
              </button>
            ) : null}
            {isChecked['deleteWords'] && userInfo ? (
              <button
                id="addToDeletedBtn"
                className="card__add-to-btn red"
                onClick={(e) => {
                  setSentCardInfo({
                    id: id,
                    isDeleted: true,
                  });
                  setTimeout(() => {
                    toggleCardState();
                    setPageReload(!pageReload);
                  }, 1000);
                }}
              >
                В удаленные слова
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

WordCard.defaultProps = {
  id: '',
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
  isChecked: {},
  wordDifficulty: 0,
  pageNumber: '',
  isHard: false,
};

WordCard.propTypes = {
  id: PropTypes.string,
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
  isChecked: PropTypes.object,
  wordDifficulty: PropTypes.number,
  pageNumber: PropTypes.number,
  isHard: PropTypes.bool,
};
export default WordCard;
