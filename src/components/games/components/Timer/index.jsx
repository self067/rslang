import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { TimerWrap } from './styled';
import { TimerSVG } from './TimerSVG';

function useInterval(callback, runTimer) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (runTimer) {
      let id = setInterval(tick, 100);

      return () => {
        clearInterval(id);
      };
    }
    return undefined;
  }, [runTimer]);
}

export const Timer = ({
  outerColor,
  innerColor,
  countdownColor,
  displayCountdown,
  timerDuration,
  resetTimerRequested,
  resetTimer,
  timerCount = 60,
  completeTimer,
}) => {
  let [draw, setDraw] = useState('');
  let [timerIsRunning, setTimerIsRunning] = useState(false);
  let [counterText, setcounterText] = useState('');
  let [duration, setDuration] = useState(0);
  let [elapsedTime, setElapsedTime] = useState(0);
  let [startDateMoment, setStartDateMoment] = useState(null);

  const goalTimeMilliseconds = timerCount * 1000;
  const degrees = 360 / (timerCount * 1000);

  const start = () => {
    setElapsedTime(duration);
    setStartDateMoment(moment(new Date()));
    setTimerIsRunning(true);
  };

  const pause = () => {
    setTimerIsRunning(false);
  };

  const reset = () => {
    setTimerIsRunning(false);
    // setDuration(0);
    // setElapsedTime(0);
    // setDraw(drawCoord(360));
    // if (completeTimer)
    // completeTimer(false);
    // if (resetTimer)
    // resetTimer();
  };

  useEffect(() => {
    const getcounterText = () => {
      const isTimerPositive = duration > goalTimeMilliseconds;
      const getTimerDuration = () => {
        return moment
          .duration(
            isTimerPositive
              ? duration - goalTimeMilliseconds
              : goalTimeMilliseconds - duration
          )
          .asMilliseconds();
      };
      let roundedMilliseconds = Math.round(getTimerDuration() / 1000) * 1000;
      let prefix = isTimerPositive && roundedMilliseconds > 0 ? '+' : '';
      return `${prefix}${moment.utc(roundedMilliseconds).format('mm:ss')}`;
    };

    setcounterText(getcounterText());
  }, [duration, goalTimeMilliseconds]);

  useEffect(() => start(), []);

  useInterval(() => {
    if (resetTimerRequested) {
      reset();
    }
  }, resetTimerRequested);

  useInterval(() => {
    setDuration(elapsedTime + moment(new Date()).diff(moment(startDateMoment)));
    if (duration <= goalTimeMilliseconds) {
      setDraw(drawCoord(duration * degrees));
    } else {
      setTimerIsRunning(false);
      setDraw(drawCoord(359.99));
      if (completeTimer) completeTimer(true);
    }
    if (timerDuration) timerDuration(duration);
  }, timerIsRunning);

  const drawCoord = (degrees) => {
    let radius = 60;
    let radians = (degrees * Math.PI) / 180;
    let offset = 10;
    let rX = radius + offset + Math.sin(radians) * radius;
    let rY = radius + offset - Math.cos(radians) * radius;
    let dir = degrees > 180 ? 1 : 0;

    let coord = `M${radius + offset},${radius + offset} L${
      radius + offset
    },${offset} A${radius},${radius} 0 ${dir},1 ${rX},${rY}`;
    return coord;
  };

  return (
    <TimerWrap>
      <TimerSVG
        timerText={counterText}
        draw={draw}
        outerColor={outerColor}
        innerColor={innerColor}
        countdownColor={countdownColor}
        timerIsRunning={timerIsRunning}
        displayCountdown={displayCountdown}
        clickStart={() => (timerIsRunning ? pause() : start())}
      />
    </TimerWrap>
  );
};
