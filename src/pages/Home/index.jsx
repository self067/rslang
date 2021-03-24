import React from 'react';
import { StyledHome, StyledVideo, StyledSection } from './styled';
import { Footer } from '../../components/footer';
import GameCards from '../../components/cards/components/gameCard/cards';
import TeamCards from '../../components/cards/components/teamCard/cards';
import StatisticCard from '../../components/cards/components/statisticCard';

function Home() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledHome>
        <StatisticCard />
        <GameCards />
        <TeamCards />
        <Footer />
      </StyledHome>
    </StyledSection>
  );
}

export default Home;
