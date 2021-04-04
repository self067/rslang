import React from 'react';
import { StyledFooter, StyledText, StyledLink, StyledLogo } from './styled';

export const Footer = () => {
  const creators = [
    {
      name: 'Олег Кузьмин',
      href: 'https://github.com/self067',
    },
    {
      name: ' Анастасия Тяпкина',
      href: 'https://github.com/StasyTyapkina',
    },
    {
      name: ' Ринат Насибуллин',
      href: 'https://github.com/nilubisan',
    },
    {
      name: 'Влад Кривоконев',
      href: 'https://github.com/darkusss',
    },
  ];

  return (
    <StyledFooter>
      <StyledText>Создатели проекта:</StyledText>

      {creators.map((item, index) => (
        <StyledLink
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={item.href}
        >
          {item.name}
        </StyledLink>
      ))}

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
