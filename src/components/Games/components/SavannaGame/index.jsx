import React, { useState } from 'react';
import { useSpring, a } from 'react-spring';
import { Container, Words, Word, SpecialWord } from './SavannaGame.styled';
import GameLife from '../GameLife';
import Stone from './components/Stone';
import GameLoader from '../GameLoader';

const fakeWords = ['destination', 'watch', 'lose', 'weight'];
const correctWord = 'destination';

const Index = ({ onWordSuccess, onWordFail, lives }) => {
  const [animationSucceed, setAnimationSuccess] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [lives, setLives] = useState(lives);

  const onFinishTimer = () => {
    setStopTimer(true);
  };

  const { x } = useSpring({
    pause: !stopTimer,
    to: { x: 100 },
    from: { x: 0 },
    config: { duration: 10000 },
  });

  const AnimatedWord = a(SpecialWord);

  const checkWord = (word) => {
    return () => {
      if (word === correctWord) {
        onWordSuccess();
        return;
      }
      setLives((lives) => lives - 1);
      onWordFail();
    };
  };

  return (
    <Container>
      {!stopTimer && <GameLoader time={3} onFinish={onFinishTimer} />}
      {stopTimer && <GameLife currentNumberOfLives={lives} />}
      <AnimatedWord
        style={{
          top: x.to((deltaX) => `${deltaX}%`),
        }}
      >
        Destination
      </AnimatedWord>
      <Words>
        {fakeWords.map((fakeWord) => (
          <Word key={fakeWord} onClick={checkWord(fakeWord)}>
            {fakeWord}
          </Word>
        ))}
      </Words>
      <Stone />
    </Container>
  );
};

export default Index;
