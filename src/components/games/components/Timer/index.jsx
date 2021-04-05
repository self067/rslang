import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { TimerSVG } from './TimerSVG';

function useInterval(callback, runTimer) {
  console.log('useInterval ', runTimer);
  const savedCallback = useRef();

  useEffect(() => {
    console.log('useEffect1');
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    console.log('useEffect2');
    function tick() {
      savedCallback.current();
    }
    if (runTimer) {
      let id = setInterval(tick, 1000);
      console.log('setInterval ', id);
      return () => {
        console.log('clearInterval', id);
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
  timerCount,
  completeTimer,
}) => {
  timerCount = timerCount || 60;

  let [draw, setDraw] = useState('');
  let [timerIsRunning, setTimerIsRunning] = useState(false);
  let [counterText, setcounterText] = useState('');
  let [duration, setDuration] = useState(0);
  let [elapsedTime, setElapsedTime] = useState(0);
  let [startDateMoment, setStartDateMoment] = useState(null);

  const goalTimeMilliseconds = timerCount * 1000;
  const degrees = 360 / (timerCount * 1000);

  //  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // useInterval(() => {
  //   if (resetTimerRequested) {
  //     reset();
  //   }
  // }, resetTimerRequested);

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

  const start = () => {
    setElapsedTime(duration);
    setStartDateMoment(moment(new Date()));
    setTimerIsRunning(true);
    console.log(duration);
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
    <div style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
      <TimerSVG
        timerText={counterText}
        draw={draw}
        outerColor={outerColor}
        innerColor={innerColor}
        countdownColor={countdownColor}
        timerIsRunning={timerIsRunning}
        displayCountdown={displayCountdown}
        clickStart={() =>
          !completeTimer ? (timerIsRunning ? pause() : start()) : null
        }
      />
    </div>
  );
};