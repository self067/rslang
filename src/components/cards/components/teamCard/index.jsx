import React from 'react';
import {
  StyledTeamCard,
  StyledTeamTitle,
  StyledTeamSubtitle,
  StyledLinks,
  StyledTeamLink,
  StyledTeamImg,
} from './styled';
import PropTypes from 'prop-types';

function TeamCard({ name, src, text, git, discord, email, position }) {
  return (
    <>
      <StyledTeamCard>
        <StyledTeamImg src={src} alt="photo" />
        <h1>{name}</h1>
        <StyledTeamTitle>{position}</StyledTeamTitle>
        <StyledTeamSubtitle>{text}</StyledTeamSubtitle>
        <StyledLinks>
          <StyledTeamLink href={git} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github-square"></i>
          </StyledTeamLink>
          <StyledTeamLink
            href={discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-discord"></i>
          </StyledTeamLink>
          <StyledTeamLink
            href={'mailto:' + email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-envelope"></i>
          </StyledTeamLink>
        </StyledLinks>
      </StyledTeamCard>
    </>
  );
}

export default TeamCard;

TeamCard.defaultProps = {
  name: '',
  src: '',
  text: '',
  git: '',
  discord: '',
  email: '',
  position: '',
};

TeamCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  git: PropTypes.string,
  discord: PropTypes.string,
  email: PropTypes.string,
  position: PropTypes.string,
};
