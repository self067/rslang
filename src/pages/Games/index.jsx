import React from 'react';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
  StyledTitle,
} from '../styled';
import GameCards from 'components/cards/components/gameCard/cards';

function Games() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <StyledTitle>Выбери игру</StyledTitle>
        <GameCards />
      </StyledContainer>
    </StyledSection>
  );
}

export default Games;
