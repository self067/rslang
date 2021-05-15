import React from 'react';
import { StyledSection, StyledContainer, StyledVideo } from '../styled';
import { Footer } from 'components/footer';
import GameCards from 'components/cards/components/gameCard/cards';
import TeamCards from 'components/cards/components/teamCard/cards';
import StatisticCard from 'components/cards/components/statisticCard';
import Promo from 'components/promo';

function Home() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <Promo />
      <StyledContainer>
        <StatisticCard />
        <GameCards />
        <TeamCards />
        <Footer />
      </StyledContainer>
    </StyledSection>
  );
}

export default Home;
