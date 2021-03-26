import React from 'react';
import { StyledContainer, StyledVideo, StyledSection } from '../styled';

function Games() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <h1>Мини-игры "Саванна", "Аудиовызов", "Спринт", "Своя игра"</h1>
      </StyledContainer>
    </StyledSection>
  );
}

export default Games;
