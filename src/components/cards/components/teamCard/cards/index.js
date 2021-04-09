import React from 'react';
import TeamCard from '../index';
import { StyledCards, StyledTitle } from '../../gameCard/styled';
import { StyledTeamContainer } from '../styled';
function TeamCards() {
  const team = [
    {
      name: 'Олег Кузьмин',
      git: 'https://github.com/self067',
      src: 'images/2.jpg',
      position: 'Тимлид',
      text:
        'Реализовал мини-игру "Спринт". Работал и поддерживал  бекенд приложения. Реализовал механизм авторизации.',

      discord: 'https://discord.com/#',
      email: 'a.@gmail.com',
    },
    {
      name: ' Анастасия Тяпкина',
      git: 'https://github.com/StasyTyapkina',
      src: 'images/1.jpg',
      position: 'Разработчик',
      text:
        'Реализовалa главную страницу приложения, мини-игру "Аудиовызов", страницу статистики и настройки электронного учебника. Разработала дизайн приложения.',
      discord: 'https://discord.com/#',
      email: 'a.@gmail.com',
    },
    {
      name: ' Ринат Насибуллин',
      git: 'https://github.com/nilubisan',
      src: 'images/3.jpg',
      position: 'Разработчик',
      text: 'Реализовал Электронный учебник RS Lang, мини-игру "Своя Игра".',
      discord: 'https://discord.com/#',
      email: 'a.@gmail.com',
    },
    {
      name: 'Влад Кривоконев',
      git: 'https://github.com/darkusss',
      src: 'images/4.jpg',
      position: 'Разработчик',
      text: 'Реализовал мини-игру "Саванна".',
      discord: 'https://discord.com/#',
      email: 'a.@gmail.com',
    },
  ];

  return (
    <StyledCards>
      <StyledTitle>Наша команда</StyledTitle>
      <StyledTeamContainer>
        {team.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            src={item.src}
            position={item.position}
            text={item.text}
            git={item.git}
            discord={item.discord}
            email={item.email}
          />
        ))}
      </StyledTeamContainer>
    </StyledCards>
  );
}

export default TeamCards;
