import React, { useState, useEffect } from 'react';
import { Overlay, Timer } from './styled';

const GameLoader = ({ time, onFinish, duration = 1 }) => {
  const timeToSomethingHappens = duration * 1000;
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    let intervalRef = null;
    if (timer > 0) {
      intervalRef = setTimeout(
        () => setTimer((prevTimer) => prevTimer - 1),
        timeToSomethingHappens
      );
    } else {
      onFinish();
    }
    return () => clearTimeout(intervalRef);
  }, [onFinish, timeToSomethingHappens, timer]);

  return (
    <Overlay>
      <Timer>{timer}</Timer>
    </Overlay>
  );
};

export default GameLoader;
