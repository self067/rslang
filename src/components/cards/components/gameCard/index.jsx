import React from 'react';
import CardItem from '../../index';
import {
  StyledCards,
  StyledTitle,
  StyledContainer,
  StyledWrapper,
  StyledItems,
} from '../../styled';

function Cards() {
  return (
    <StyledCards>
      <StyledTitle>Прокачай английский играя!</StyledTitle>
      <StyledContainer>
        <StyledWrapper>
          <StyledItems>
            <CardItem
              src="images/savanna.svg"
              text="Те слова, которые мы знаем/помним/используем – это наш активный словарный запас или активная лексика. 
              А слова, которые мы учили/выучили/знаем, но не смогли вспомнить оперативно – это наш пассивный словарь.
              Мини-игра “Саванна” – это тренажер по переводу твоего пассивного изученного словаря в активную стадию"
              name="Саванна"
              path="/savannaGame"
            />
            <CardItem
              src="images/audio.svg"
              text="Аудирование для многих, пожалуй, самый сложный навык. 
              Понять иностранную речь бывает очень трудно: половину слов ты не успеваешь расслышать и понять. 
              Мини-игра Аудиовызов делает развивает восприятие и перевод на слух английских слов. "
              name="Аудиовызов"
              path="/audioGame"
            />
          </StyledItems>
          <StyledItems>
            <CardItem
              src="images/sprint.svg"
              text="На старт, внимание, марш! Сможешь ли ты найти верный перевод слова?
              Мини-игра «Спринт» - это тренировка для повторения заученных слов из вашего словаря."
              name="Спринт"
              path="/sprintGame"
            />
            <CardItem
              src="images/puzzle.svg"
              text="Нужно что-то написать, если мы все же сделаем эту игру)))"
              name="Своя игра"
              path="/ourGame"
            />
          </StyledItems>
        </StyledWrapper>
      </StyledContainer>
    </StyledCards>
  );
}

export default Cards;
