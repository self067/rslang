import React from 'react';
import GameCard from '../index';
import { StyledCards, StyledTitle, StyledContainer } from '../styled';

function GameCards() {
  return (
    <StyledCards>
      <StyledTitle>Прокачай английский, играя!</StyledTitle>
      <StyledContainer>
        <GameCard
          src="images/savanna.png"
          text="Те слова, которые мы помним и используем – это наш активный словарный запас или активная лексика. 
              А слова, которые мы учили, но не смогли вспомнить оперативно – это наш пассивный словарь.
              Мини-игра “Саванна” – это тренажер по переводу твоего пассивного изученного словаря в активную стадию"
          name="Саванна"
          path="/savannaGame"
        />
        <GameCard
          src="images/audio.png"
          text="Аудирование для многих, пожалуй, самый сложный навык. 
              Понять иностранную речь бывает очень трудно: половину слов ты не успеваешь расслышать и понять. 
              Мини-игра Аудиовызов делает развивает восприятие и перевод на слух английских слов. "
          name="Аудиовызов"
          path="/audioGame"
        />
        <GameCard
          src="images/sprint.png"
          text="На старт, внимание, марш! Сможешь ли ты найти верный перевод слова?
              Мини-игра «Спринт» - это тренировка для повторения заученных слов из твоего словаря.
              За 60 секунд нужно угадать, правильный ли перевод предложен к английскому слову"
          name="Спринт"
          path="/sprintGame"
        />
        <GameCard
          src="images/puzzle.png"
          text="Нужно что-то написать, если мы все же сделаем эту игру)))"
          name="Своя игра"
          path="/ourGame"
        />
      </StyledContainer>
    </StyledCards>
  );
}

export default GameCards;
