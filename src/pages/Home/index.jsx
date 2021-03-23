import React from 'react';
import { StyledHome, StyledVideo, StyledSection } from './styled';
import { Footer } from '../../components/footer';
import Cards from '../../components/cards/components/gameCard';

function Home() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledHome>
        <Cards />
        <Footer />
      </StyledHome>
    </StyledSection>
  );
}

export default Home;
