import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFigure,
  StyledInfo,
  StyledCardText,
  StyledImg,
  SLink,
} from './styled';

function GameCard({ name, src, text, path }) {
  return (
    <>
      <SLink to={path}>
        <StyledFigure data-category={name}>
          <StyledImg src={src} />
        </StyledFigure>
        <StyledInfo>
          <StyledCardText>{text}</StyledCardText>
        </StyledInfo>
      </SLink>
    </>
  );
}

GameCard.defaultProps = {
  name: '',
  src: '',
  text: '',
  path: '/',
};

GameCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  country: PropTypes.string,
  path: PropTypes.string,
};

export default GameCard;
