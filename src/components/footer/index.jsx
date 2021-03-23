import React  from 'react';
import { StyledFooter, StyledText, StyledLink, StyledLogo } from './styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>Created by</StyledText>
      <StyledLink
        href="https://github.com/self067"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oleg Kuzmin
      </StyledLink>

      <StyledLink
        href="https://github.com/StasyTyapkina"
        target="_blank"
        rel="noopener noreferrer"
      >
        Anastasia Tiapkina
      </StyledLink>
      <StyledLink
        href="https://github.com/nilubisan"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rinat Nassibullin
      </StyledLink>
      <StyledLink
        href="https://github.com/darkusss"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vlad Kryvokoniev
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
