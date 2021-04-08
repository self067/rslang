import React, { useState, useMemo, useEffect, useContext } from 'react';

import { Button } from 'components/button';
import { Link } from 'react-router-dom';
import { StyledLoader } from 'components/loader';

import {
  StyledStatRightPart,
  StyledStatTitle,
  StyledStatProgressContainer,
  StyledStatProgress,
} from 'components/cards/components/statisticCard/styled';

import {
  StyledStatContainer,
  StyledStatInfo,
  StyledStatSubTitle,
  StyledInfoContainer,
  StyledInfoText,
  StyledInfoValue,
  StyledInfoLine,
  StyledImg,
} from './styled';
import UserContext from 'components/Auth/UserContext';

function SessionStatistic() {
  const { userInfo } = useContext(UserContext);
  const baseUrl = process.env.REACT_APP_APIURL;
  //const fetchDataLink = ` ${baseUrl}/users/${userId}/statistics`;
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [items, setItems] = useState([]);
  const [i, setI] = useState([]);
  useEffect(() => {
    const gameOverStatistick = sessionStorage.getItem('audioStat');
    if (gameOverStatistick) {
      setI(JSON.parse(gameOverStatistick));
    }
  }, []);

  /*useEffect(() => {
    fetch(fetchDataLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);*/

  const statInfo = useMemo(
    () => [
      {
        title: 'Выучено слов сегодня:',
        value: /*learnedWords ||*/ 0,
      },
      {
        title: 'Правильных ответов дано:',
        value: /*Math.floor((rightAnswers * 100) / learnedWords) ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре"Саванна"',
        value: /*longestSeriesAnswersSavanna ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Аудиовызов"',
        value: /*longestSeriesAnswersAudioCall ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Спринт"',
        value: /*longestSeriesAnswersSprint ||*/ 0,
      },
      {
        title: 'Комбо правильных ответов в игре "Своя игра"',
        value: /*longestSeriesAnswersOurGame ||*/ 0,
      },
    ],
    []
  );

  const todayInfo = useMemo(
    () =>
      statInfo.map((item, index) => (
        <div key={index}>
          <StyledInfoText>
            {item.title}
            <StyledInfoValue>{item.value}</StyledInfoValue>
          </StyledInfoText>
          <StyledInfoLine />
        </div>
      )),
    [statInfo]
  );

  /*if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {*/
  return (
    <StyledStatContainer>
      <StyledStatRightPart>
        <StyledStatTitle>Твоя статистика обучения</StyledStatTitle>
        <StyledStatSubTitle>Сегодня</StyledStatSubTitle>
        <StyledImg src="images/characters/15.png" alt="character" />
      </StyledStatRightPart>
      <StyledStatInfo>
        <StyledStatProgressContainer>
          <StyledStatProgress></StyledStatProgress>
          <StyledInfoText>Выучено слов всего {i} из 3600</StyledInfoText>
        </StyledStatProgressContainer>
        <StyledInfoContainer>
          {todayInfo}
          <Link to="/dictionary">
            <Button buttonStyle="btn--dark" buttonSize="btn--large">
              Продолжить обучение
            </Button>
          </Link>
        </StyledInfoContainer>
      </StyledStatInfo>
    </StyledStatContainer>
  );
  //}
}

export default SessionStatistic;
