import React from 'react';
import { StyledContainer, StyledVideo, StyledSection } from '../styled';

function Statistic() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <h1>Cтраница статистики</h1>
      </StyledContainer>
    </StyledSection>
  );
}

export default Statistic;
