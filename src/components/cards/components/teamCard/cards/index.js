import React from 'react';
import TeamCard from '../index';
import {
  StyledCards,
  StyledTitle,
  StyledContainer,
  StyledWrapper,
  StyledItems,
} from '../../gameCard/styled';

function TeamCards() {
  return (
    <StyledCards>
      <StyledTitle>Наша команда</StyledTitle>
      <StyledContainer>
        <StyledWrapper>
          <StyledItems>
            <TeamCard
              name="Олег Кузьмин"
              src="images/2.jpg"
              position="Тимлид"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/self067"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Анастасия Тяпкина"
              src="images/1.jpg"
              position="Разработчик"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/StasyTyapkina"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Ринат Насибуллин"
              src="images/3.jpg"
              position="Разработчик"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/nilubisan"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Влад Кривоконев"
              src="images/4.jpg"
              position="Разработчик"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/darkusss"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
          </StyledItems>
        </StyledWrapper>
      </StyledContainer>
    </StyledCards>
  );
}

export default TeamCards;
