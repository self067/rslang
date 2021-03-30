/* eslint-disable no-undef */
import React, { useMemo } from 'react';
import { StyledContainer, StyledVideo, StyledSection } from '../styled';

import {
  StyledStatTitle,
  StyledStatRightPart,
  StyledStatProgressContainer,
  StyledStatProgress,
  StyledImg,
} from '../../components/cards/components/statisticCard/styled';

import {
  StyledStatContainer,
  StyledStatInfo,
  StyledTitle,
  StyledStatSubTitle,
  StyledInfoContainer,
  StyledInfoText,
  StyledInfoValue,
  StyledInfoLine,
} from './styled';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import StatChart from './components/charts';

function Statistic() {
  const todayStatInfo = useMemo(
    () => [
      {
        title: 'Выучено слов сегодня:',
        value: /*learnedWords ||*/ 0,
      },
      {
        title: 'Правильных ответов дано:',
        value: /*Math.floor((rightAnswers * 100) / learnedWords) ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре"Саванна"',
        value: /*longestSeriesAnswers ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Аудиовызов"',
        value: 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Спринт"',
        value: 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Своя игра"',
        value: 0,
      },
    ],
    []
  );

  const todayInfo = useMemo(
    () =>
      todayStatInfo.map(({ title, value, index }) => (
        <>
          <StyledInfoText key={index}>
            {title}

            <StyledInfoValue>{value}</StyledInfoValue>
          </StyledInfoText>
          <StyledInfoLine />
        </>
      )),
    [todayStatInfo]
  );
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <StyledTitle>Cтраница статистики</StyledTitle>

        <StyledStatContainer>
          <StyledStatRightPart>
            <StyledStatTitle>Твоя статистика обучения</StyledStatTitle>
            <StyledStatSubTitle>Сегодня</StyledStatSubTitle>
          </StyledStatRightPart>
          <StyledStatInfo>
            <StyledStatProgressContainer>
              <StyledStatProgress></StyledStatProgress>
              <StyledInfoText>Выучено слов всего 0 из 3600</StyledInfoText>
            </StyledStatProgressContainer>
            <StyledInfoContainer>
              {todayInfo}
              <Link to="/dictionary">
                <Button buttonStyle="btn--light" buttonSize="btn--large">
                  Продолжить обучение
                </Button>
              </Link>
            </StyledInfoContainer>
          </StyledStatInfo>
          {/*<StyledImg src="images/characters/11.png" alt="character" />*/}
        </StyledStatContainer>
        <StyledStatContainer>
          <StatChart />
          <StatChart />
        </StyledStatContainer>
      </StyledContainer>
    </StyledSection>
  );
}

export default Statistic;
