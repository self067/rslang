import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeUp,
  faTimes,
  faVolumeOff,
  faExclamationTriangle,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const SoundOnIcon = <FontAwesomeIcon icon={faVolumeUp} size="xs" />;
export const SoundOffIcon = <FontAwesomeIcon icon={faVolumeOff} size="xs" />;
export const CloseIcon = <FontAwesomeIcon icon={faTimes} size="lg" />;
export const HardWordIcon = (
  <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
);
