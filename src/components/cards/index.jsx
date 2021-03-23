import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledFigure,
  StyledInfo,
  StyledCardText,
  StyledImg,
} from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

function CardItem({ name, src, text, path }) {
  return (
    <>
      <StyledItem>
        <SLink to={path}>
            <StyledFigure data-category={name}>
              <StyledImg src={src} />
            </StyledFigure>

            <StyledInfo>
              <StyledCardText>{text}</StyledCardText>
            </StyledInfo>
        </SLink>
      </StyledItem>
    </>
  );
}

CardItem.defaultProps = {
  name: '',
  src: '',
  text: '',
  path: '/',
};

CardItem.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  country: PropTypes.string,
  path: PropTypes.string,
};

export default CardItem;
