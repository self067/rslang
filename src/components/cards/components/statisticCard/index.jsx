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
} from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
`;

function StatisticCard() {
  return (
    <div>
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
      </StyledStatContainer>
    </div>
  );
}

export default StatisticCard;
