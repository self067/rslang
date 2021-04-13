import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  StyledImg,
} from './styled';

import './styles.css'; //добавление selected для Tab*/
import { Button } from 'components/button';

export default function StartPage({
  name,
  description,
  rules,
  path,
  setIsGame,
}) {
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
    'images/characters/images/4.png',
    'images/characters/images/3.png',
    'images/characters/images/5.png',
    'images/characters/images/6.png',
  ];

  return (
    <StyledSection>
      <StyledVideo src="video/video.mp4" autoPlay loop muted />
      <StyledContainer>
        <StyledTitle>Добро пожаловать в игру {name}</StyledTitle>
        <StyledContent>
          <Tabs
            onSelect={(index) => {
              setLevel(index);
            }}
          >
            <StyledTabHeader>
              <StyledImg src={img[level]} alt="img" />
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
            </STabList>
            <TabPanel />
            <TabPanel />
            <TabPanel />
            <TabPanel />
            <TabPanel />
            <TabPanel />
          </Tabs>

          <StyledText> {description} </StyledText>

          <StyledTextTitle>Что нужно делать?</StyledTextTitle>
          <StyledText>{rules}</StyledText>

          <Link to={path} level={level}>
            <Button
              buttonStyle="btn--dark"
              buttonSize="btn--large"
              onClick={() => setIsGame(true)}
            >
              Начать игру
            </Button>
          </Link>
        </StyledContent>
      </StyledContainer>
    </StyledSection>
  );
}

StartPage.defaultProps = {
  name: '',
  description: '',
  rules: '',
  path: '/',
  setIsGame: () => {},
};

StartPage.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  rules: PropTypes.string,
  path: PropTypes.string,
  setIsGame: PropTypes.func,
};
