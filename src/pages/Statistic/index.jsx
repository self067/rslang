import React from 'react';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
  StyledTitle,
} from '../styled';

import { StyledChartContainer } from './styled';
import StatChart from './components/charts';
import SessionStatistic from './components/sessionStatistic';

function Statistic() {
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <StyledTitle>Cтраница статистики</StyledTitle>
        <SessionStatistic />
        <StyledChartContainer>
          <StatChart />
          <StatChart />
        </StyledChartContainer>
      </StyledContainer>
    </StyledSection>
  );
}

export default Statistic;
