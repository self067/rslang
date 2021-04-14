import React, { useState, useMemo, useEffect } from 'react';

import { Button } from 'components/button';
import { Link } from 'react-router-dom';

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

function SessionStatistic() {
  const [audioStat, setAudioStat] = useState([]);
  const [ourGameStat, setOurGameStat] = useState([]);
  const [savannaStat, setSavannaStat] = useState([]);
  const [sprintStat, setSprintStat] = useState([]);

  useEffect(() => {
    const audioStatistic = sessionStorage.getItem('audioStat');
    if (audioStatistic) {
      setAudioStat(JSON.parse(audioStatistic));
    }

    const ourGameStatistic = sessionStorage.getItem('ourGameStat');
    if (ourGameStatistic) {
      setOurGameStat(JSON.parse(ourGameStatistic));
    }

    const savannaStatistic = sessionStorage.getItem('');
    if (savannaStatistic) {
      setSavannaStat(JSON.parse(savannaStatistic));
    }

    const sprintStatistic = sessionStorage.getItem('');
    if (sprintStatistic) {
      setSprintStat(JSON.parse(sprintStatistic));
    }
  }, [audioStat, ourGameStat, savannaStat, sprintStat]);

  const totalWords =
    audioStat[0] + sprintStat[0] + audioStat[0] + savannaStat[0];

  const statInfo = useMemo(
    () => [
      {
        title: 'Выучено слов сегодня:',
        value: totalWords ? totalWords : 0,
      },
      {
        title: 'Правильных ответов дано:',
        value: 0 + '%' || Math.floor((totalWords * 100) / 50) + '%',
      },
      //---------------------//
      {
        title: 'Количество изученных слов в игре "Саванна"',
        value: savannaStat[0] || 0,
      },
      {
        title: 'Процент правильных ответов в игре "Саванна"',
        value: 0 + '%' || Math.floor((savannaStat[0] * 100) / 10) + '%',
      },
      {
        title: 'Комбо правильных ответов в игре "Саванна"',
        value: savannaStat[1] || 0,
      },

      //---------------------//
      {
        title: 'Количество изученных слов в игре "Аудиовызов"',
        value: audioStat[0] || 0,
      },
      {
        title: 'Процент правильных ответов в игре "Аудиовызов"',
        value: 0 + '%' || Math.floor((audioStat[0] * 100) / 10) + '%',
      },
      {
        title: 'Комбо правильных ответов в игре "Аудиовызов"',
        value: audioStat[1] || 0,
      },

      //---------------------//

      {
        title: 'Количество изученных слов в игре "Спринт"',
        value: sprintStat[0] || 0,
      },
      {
        title: 'Процент правильных ответов в игре "Спринт"',
        value: 0 + '%' || Math.floor((sprintStat[0] * 100) / 10) + '%',
      },
      {
        title: 'Комбо правильных ответов в игре "Спринт"',
        value: sprintStat[1] || 0,
      },

      //---------------------//

      {
        title: 'Количество изученных слов в игре "Наводка"',
        value: ourGameStat[0] || 0,
      },
      {
        title: 'Процент правильных ответов в игре "Наводка"',
        value: 0 + '%' || Math.floor((ourGameStat[0] * 100) / 10) + '%',
      },
      {
        title: 'Комбо правильных ответов в игре "Наводка"',
        value: ourGameStat[1] || 0,
      },
    ],
    [ourGameStat, sprintStat, audioStat, savannaStat, totalWords]
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
          <StyledInfoText>
            Выучено слов всего {totalWords ? totalWords : 0} из 3600
          </StyledInfoText>
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
