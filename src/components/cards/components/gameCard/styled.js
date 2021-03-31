import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLink = styled(Link)`
  display: flex;
  flex-flow: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-decoration: none;
`;

export const StyledCards = styled.section`
  background: #fff;
  max-width: 1120px;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0 3rem;
`;

export const StyledContainer = styled.div`
  width: 94%;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 40px;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 80%;
  overflow: hidden;
  margin: 0;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    left: 0px;
    padding: 10px 25px;
    max-width: calc((100%) - 60px);
    font-size: 2rem;
    color: var(--light);
    background-color: var(--blue-dark);
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  -webkit-transition: -webkit-transform 0.5s ease;
  -moz-transition: -moz-transform 0.5s ease;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledInfo = styled.div`
  padding: 50px 30px 60px;
`;

export const StyledCardText = styled.p`
  color: var(--grey);
  font-size: 24px;
  text-align: center;
`;
