import React from 'react';
import {
  StyledStatContainer,
  StyledStatTitle,
  StyledStatRightPart,
  StyledStatInfo,
  StyledStatProgressContainer,
  StyledStatProgress,
  StyledStatProgressText,
  StyledBttn,
  StyledImg,
} from './styled';
import { StyledCards } from '../../components/gameCard/styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 30px;
  text-decoration: none;
`;

function StatisticCard() {
  return (
    <StyledCards>
      <StyledStatContainer>
        <StyledStatRightPart>
          <StyledStatTitle>Твоя статистика обучения</StyledStatTitle>
          <SLink to="/statistic">
            Посмотреть всю статистику <i class="fas fa-chevron-right"></i>
          </SLink>
        </StyledStatRightPart>
        <StyledStatInfo>
          <StyledStatProgressContainer>
            <StyledStatProgress></StyledStatProgress>
            <StyledStatProgressText>
              0/20 Выучено слов сегодня
            </StyledStatProgressText>
          </StyledStatProgressContainer>
          <StyledStatProgressContainer>
            <StyledStatProgress></StyledStatProgress>
            <StyledStatProgressText>
              0/3600 Выучено слов всего
            </StyledStatProgressText>
          </StyledStatProgressContainer>

          <Link to="/dictionary">
            <StyledBttn>Продолжить обучение</StyledBttn>
          </Link>
        </StyledStatInfo>
        <StyledImg src="images/characters/11.png" alt="character" />
      </StyledStatContainer>
    </StyledCards>
  );
}

export default StatisticCard;
