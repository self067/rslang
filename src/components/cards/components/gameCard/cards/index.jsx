import React from 'react';
import GameCard from '../index';
import { StyledCards, StyledTitle, StyledContainer } from '../styled';

function GameCards() {
  const games = [
    {
      name: 'Саванна',
      src: 'images/savanna.png',
      text:
        ' Те слова, которые мы помним и используем – это наш активный словарный запас. А слова, которые мы учили, но не смогли вспомнить оперативно – это наш пассивный словарный запас. Мини-игра “Саванна” – это тренажер по переводу твоего пассивного словаря в активную стадию.',
      path: '/savannaGame',
    },
    {
      name: 'Аудиовызов',
      src: 'images/audio.png',
      text:
        'Аудирование для многих, пожалуй, самый сложный навык. Понять иностранную речь бывает очень трудно: половину слов ты не успеваешь расслышать и понять. Мини-игра Аудиовызов развивает восприятие и перевод на слух английских слов.',
      path: '/audioGameStartPage',
    },
    {
      name: 'Спринт',
      src: 'images/sprint.png',
      text:
        'На старт, внимание, марш! Сможешь ли ты найти верный перевод слова? Мини-игра «Спринт» - это тренировка для повторения изученных слов из твоего словаря. За 60 секунд нужно угадать, правильный ли перевод предложен к английскому слову.',
      path: '/sprintStartPage',
    },
    {
      name: 'Наводка',
      src: 'images/puzzle.png',
      text:
        'Ты слышишь слово и должен правильно его написать. Сможешь ли ты не допустить ошибок в этой увлекательной игре?',
      path: '/ourGameStartPage',
    },
  ];

  return (
    <StyledCards>
      <StyledTitle>Прокачай английский, играя!</StyledTitle>
      <StyledContainer>
        {games.map((item, index) => (
          <GameCard
            key={index}
            src={item.src}
            text={item.text}
            name={item.name}
            path={item.path}
          />
        ))}
      </StyledContainer>
    </StyledCards>
  );
}

export default GameCards;
