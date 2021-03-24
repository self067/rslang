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
              name="Oleg Kuzmin"
              src="images/2.jpg"
              position="Team Lead"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/self067"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Anastasia Tiapkina"
              src="images/1.jpg"
              position="Developer"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/StasyTyapkina"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Rinat Nassibullin"
              src="images/3.jpg"
              position="Developer"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://github.com/darkusss"
              discord="https://discord.com/#"
              email="a.@gmail.com"
            />
            <TeamCard
              name="Vlad Kryvokoniev"
              src="images/4.jpg"
              position="Developer"
              text="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua."
              git="https://rs.school/index.html"
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
