import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex-wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
`;

export const StyledText = styled.p`
  font-size: 18px;
  color: #333;
  margin-right: 10px;
  display: inline-block;
`;

export const StyledLink = styled.a`
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  display: inline-block;
  &,
  &:after,
  &:visited {
    color: #333;
    text-decoration: none;
  }
  &:hover {
    color: #335;
  }
`;

export const StyledLogo = styled.img`
  height: 30px;
`;
