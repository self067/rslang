import React from 'react';
import redHeart from '../../images/heart.svg';
import deadHeart from '../../images/dead-heart.svg';
import { HeartsContainer } from './styled';

function Index({ totalLives = 5, currentNumberOfLives = 5 }) {
  console.log(currentNumberOfLives);
  const hearts = Array.from({ length: totalLives }, (_, num) => num).map(
    (num) => {
      const redHeartAllowed = num < currentNumberOfLives;
      return (
        <span key={['heart', num].join('_')}>
          {redHeartAllowed ? (
            <img src={redHeart} alt="red heart" />
          ) : (
            <img src={deadHeart} alt="dead heart" />
          )}
        </span>
      );
    }
  );

  return <HeartsContainer>{hearts}</HeartsContainer>;
}

export default Index;
