import React, { useState, useEffect } from 'react';
import StartPage from '../startPage';
import SavannaGame from './index';

export default function SavannaGameStartPage() {
  const [isGame, setIsGame] = useState(false);
  const [level, setLevel] = useState(0);

  return (
    <>
      {!isGame ? (
        <StartPage
          level={level}
          setLevel={setLevel}
          setIsGame={setIsGame}
          name="«Саванна»"
          description="Раз! И подбитое твоим стремительным переводом английское слово падает в раздел уже изученных. Если образно говорить о новой тренировке «Саванна», то можно описать ее именно так: это что-то среднее между танчиками и тетрисом, с уклоном в английский язык.Те слова, которые мы знаем/помним/используем – это наш активный словарный запас или активная лексика. А слова, которые мы учили/выучили/знаем, но не смогли вспомнить оперативно – это наш пассивный словарь."
          rules="После отчета стартовых секунд перед тобой появится падающее вниз слово на английском и четыре варианта перевода.Ты должен выбрать правильный перевод."
          path="/savannaGame"
        />
      ) : (
        <SavannaGame level={level} />
      )}
    </>
  );
}
