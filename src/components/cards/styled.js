import styled from 'styled-components';

export const StyledCards = styled.section`
  padding: 3rem;
  background: #fff;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  margin: 50px 0 45px;
  position: relative;
`;

export const StyledItems = styled.ul`
  margin-bottom: 24px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledItem = styled.span`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
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
