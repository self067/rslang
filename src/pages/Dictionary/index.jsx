import React from 'react';
import { StyledContainer, StyledVideo, StyledSection } from '../styled';

function Dictionary() {
  return (
    <StyledSection>
      <StyledVideo src="video/background.mp4" autoPlay loop muted />
      <StyledContainer>
        <h1>Электронный учебник со словарём</h1>
      </StyledContainer>
    </StyledSection>
  );
}

export default Dictionary;
