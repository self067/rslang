import React from 'react';
import PropTypes from 'prop-types';
import { StyledFigure, StyledInfo, StyledCardText, StyledImg } from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  display: flex;
  flex-flow: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-decoration: none;
`;

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
