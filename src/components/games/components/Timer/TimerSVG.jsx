import React from 'react';
import { StyledTimerSVG } from './styled';

export const TimerSVG = ({
  clickStart,
  countdownColor = 'red',
  displayCountdown = true,
  draw = 30,
  innerColor = 'yellow',
  outerColor = 'green',
  timerIsRunning = true,
  timerText = 'timer',
}) => {
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter !== 'Time Over' &&
      setTimeout(
        () => setCounter(counter > 1 ? counter - 1 : 'Time Over'),
        1000
      );
  }, [counter]);

  return (
    <div>
      <div>Countdown: {counter === 0 ? 'Time over' : counter}</div>

      <StyledTimerSVG
        version="1.1"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 140 175"
      >
        {/* Outer circle */}
        <circle cx="70" cy="70" r="60.75" fill={outerColor} />

        {/* Countdown circle */}
        <circle cx="70" cy="70" r="59.75" fill={countdownColor} />

        {/* The black circle that covers the Color as the timer counts down */}
        {/* <path d={draw} fill={outerColor} /> */}
        <path d={draw} fill="blue" />

        {/* Inner circle that the play/pause button sits on */}
        <circle cx="70" cy="70" r="48" fill={innerColor} stroke={outerColor} />

        <g id="playButton" opacity={timerIsRunning ? 0 : 1}>
          <path d="M 55 50 L 55 91 L 95 69 L 55 50" fill={outerColor} />
        </g>

        <g id="pauseButton" opacity={timerIsRunning ? 1 : 0}>
          <rect
            x="53"
            y="53"
            height="36"
            width="13"
            rx="0"
            ry="0"
            fill={outerColor}
          />
          <rect
            x="74"
            y="53"
            height="36"
            width="13"
            rx="0"
            ry="0"
            fill={outerColor}
          />
        </g>

        <circle
          cx="70"
          cy="70"
          r="48"
          opacity="0"
          style={{
            cursor: 'pointer',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          }}
          onClick={clickStart}
        />

        {displayCountdown ? (
          <text
            x="70"
            y="165"
            textAnchor="middle"
            style={{ fill: countdownColor, fontSize: '28px' }}
          >
            {timerText}
          </text>
        ) : null}
      </StyledTimerSVG>
    </div>
  );
};
