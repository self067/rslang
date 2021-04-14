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
            name='«Савання»'
            description='Это тренажер по переводу твоего пассивного изученного словаря в активную стадию. Все это происходит за счет вовлечения реакции в процесс перевода. Тренируйся регулярно и сможешь на лету подбирать правильные слова при письме и в процессе говорения.'
            path='/savannaGame'
          />
        ) :
        <SavannaGame level={level} />
      }
    </>
  );
}