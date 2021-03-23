import React from 'react';
import { StyledHome, StyledVideo } from './styled';
import { Footer } from 'components/footer';

function Home() {
  return (
    <StyledHome>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <h1>ГЛАВНАЯ СТРАНИЦА</h1>
      <Footer />
    </StyledHome>
  );
}

export default Home;
