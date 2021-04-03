import React, { useState, useEffect } from 'react';
import {
  SoundOnIcon,
  SoundOffIcon,
} from '../../../../FontAwesomeIcons/FontAwesomeIcons';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
const Word = ({ word, translation, imageSrc, wordSoundSrc, id }) => {
  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const [playWordSound, wordSound] = useSound(baseUrl + wordSoundSrc);
  const [isAudioPlaying, playAudio] = useState(false);

  function turnOffSound() {
    wordSound.stop();
  }

  useEffect(() => {
    if (!isAudioPlaying) {
      turnOffSound();
    }
    playWordSound();
  }, [isAudioPlaying]);

  return (
    <div>
      <img src={imageSrc} className="card__image" alt={word} />

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
      </div>

      <div className="card__transcription">{translation}</div>
    </div>
  );
};

Word.defaultProps = {
  word: '',
  translation: '',
  imageSrc: '',
  wordSoundSrc: '',
  id: '',
};

Word.propTypes = {
  word: PropTypes.string,
  translation: PropTypes.string,
  imageSrc: PropTypes.string,
  wordSoundSrc: PropTypes.string,
  id: PropTypes.string,
};
export default Word;
