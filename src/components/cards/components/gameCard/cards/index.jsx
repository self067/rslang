import React from 'react';
import GameCard from '../index';
import { StyledCards, StyledTitle, StyledContainer } from '../styled';

function GameCards() {
  const games = [
    {
      name: 'Саванна',
      src: 'images/savanna.png',
      text:
        ' Те слова, которые мы помним и используем – это наш активный словарный запас или активная лексика. А слова, которые мы учили, но не смогли вспомнить оперативно – это наш пассивный словарь. Мини-игра “Саванна” – это тренажер по переводу твоего пассивного изученного словаря в активную стадию.',
      path: '/savannaGame',
    },
    {
      name: 'Аудиовызов',
      src: 'images/audio.png',
      text:
        'Аудирование для многих, пожалуй, самый сложный навык. Понять иностранную речь бывает очень трудно: половину слов ты не успеваешь расслышать и понять. Мини-игра Аудиовызов делает развивает восприятие и перевод на слух английских слов.',
      path: '/audioGame',
    },
    {
      name: 'Спринт',
      src: 'images/sprint.png',
      text:
        'На старт, внимание, марш! Сможешь ли ты найти верный перевод слова? Мини-игра «Спринт» - это тренировка для повторения заученных слов из твоего словаря. За 60 секунд нужно угадать, правильный ли перевод предложен к английскому слову.',
      path: '/sprintGame',
    },
    {
      name: 'Своя игра',
      src: 'images/puzzle.png',
      text: 'Нужно что-то написать, если мы все же сделаем эту игру.',
      path: '/ourGame',
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
