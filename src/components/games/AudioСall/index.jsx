import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
  StyledTitle,
  StyledContent,
  StyledTabHeader,
  STabList,
  STab,
  StyledText,
  StyledTextTitle,
} from './styled';

import './components/AudioCallGame/styles.css'; //добавление selected для Tab
import { Button } from 'components/button';

export default function AudioСallStartPage() {
  const [level, setLevel] = useState(0);
  const skillLevels = [
    'Beginner',
    'Elementary',
    'Pre-intermediate',
    'Intermediate',
    'Upper-intermediate',
    'Advanced',
  ];
  const img = [
    'images/characters/images/1.png',
    'images/characters/images/2.png',
    'images/characters/images/3.png',
    'images/characters/images/4.png',
    'images/characters/images/5.png',
    'images/characters/images/6.png',
  ];
  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <StyledTitle>Добро пожаловать в игру «Аудиовызов»</StyledTitle>
        <StyledContent>
          <Tabs
            onSelect={(index) => {
              setLevel(index);
            }}
          >
            <StyledTabHeader>
              <img src={img[level]} alt="img" className="characterImg" />
              <p>Выберите уровень сложности игры </p>
              {skillLevels[level]}
            </StyledTabHeader>
            <STabList>
              <STab>1</STab>
              <STab>2</STab>
              <STab>3</STab>
              <STab>4</STab>
              <STab>5</STab>
              <STab>6</STab>
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
            </STabList>
          </Tabs>

          <StyledText>
            Аудирование для многих, пожалуй, самый сложный навык. Понять
            иностранную речь бывает очень трудно: половину слов ты не успеваешь
            расслышать и понять. Из-за этого теряется смысл высказывания в
            целом. Особенно, если это телефонный разговор, или у тебя нет
            контекста события. И, в отличие от фильма с субтитрами, при живом
            общении полагаться можно только на свой слух. Получить подсказку
            будет неоткуда. Никто не покажет, как пишется слово.
          </StyledText>

          <StyledTextTitle>Что нужно делать?</StyledTextTitle>
          <StyledText>
            Ты слышишь слово и видишь 5 вариантов его перевода. При этом не
            видишь, как это слово пишется по-английски. Твоя задача выбрать
            правильный перевод озвученного слова.
          </StyledText>

          <Link to="/audioGame" level={level}>
            <Button buttonStyle="btn--dark" buttonSize="btn--large">
              Начать игру
            </Button>
          </Link>
        </StyledContent>
      </StyledContainer>
    </StyledSection>
  );
}
