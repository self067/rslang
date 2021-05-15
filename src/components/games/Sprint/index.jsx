import React, { useState } from 'react';
import StartPage from '../components/startPage';
import Sprint from './components/SprintGame';

export default function SprintStartPage() {
  const [isGame, setIsGame] = useState(false);
  return (
    <>
      {!isGame ? (
        <StartPage
          setIsGame={setIsGame}
          name="«Спринт»"
          description="«Спринт» – это особый вид тренировки-игры, где ты можешь посоревноваться на скорость и правильность ответов. Суть игры заключается в том, что тебе нужно как можно быстрее определить правильно переведено слово или нет. Чем больше слов ты успеешь перевести  за определенное время, тем ближе ты к победе."
          rules="Это скоростная тренировка. За 60 секунд надо угадывать, правильный ли перевод предложен к английскому слову."
          path="/sprintGame"
        />
      ) : (
        <Sprint />
      )}
    </>
  );
}
