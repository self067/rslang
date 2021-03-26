import React from 'react';
import { StyledFooter, StyledText, StyledLink, StyledLogo } from './styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>Создатели проекта:</StyledText>
      <StyledLink
        href="https://github.com/self067"
        target="_blank"
        rel="noopener noreferrer"
      >
        Олег Кузьмин
      </StyledLink>

      <StyledLink
        href="https://github.com/StasyTyapkina"
        target="_blank"
        rel="noopener noreferrer"
      >
        Анастасия Тяпкина
      </StyledLink>
      <StyledLink
        href="https://github.com/nilubisan"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ринат Насибуллин
      </StyledLink>
      <StyledLink
        href="https://github.com/darkusss"
        target="_blank"
        rel="noopener noreferrer"
      >
        Влад Кривоконев
      </StyledLink>
      <StyledText>2021</StyledText>
      <StyledLink
        href="https://rs.school/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <StyledLogo src="images/rs_school_logo.svg" alt="RS School Logo" />
      </StyledLink>
    </StyledFooter>
  );
};
