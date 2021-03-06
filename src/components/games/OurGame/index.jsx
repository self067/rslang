import React, { useState } from 'react';
import StartPage from '../components/startPage';
import OurGame from '../OurGame/components/OurGame';

export default function OurGameStartPage() {
  const [isGame, setIsGame] = useState(false);
  return (
    <>
      {!isGame ? (
        <StartPage
          setIsGame={setIsGame}
          name="«Наводка»"
          description="Бывало ли такое, что ты учишь набор новых слов на английском языке, повторяешь их несколько раз, слушаешь транскрипцию и смотришь примеры употребления, но когда нужно вспомнить это слово через какое-то время — оно не всплывает в голове моментально? Вроде бы «вертится на языке», но никак не удается вспомнить наверняка. Регулярное пополнение словарного запаса и изучение тематической лексики — ключ к богатому английскому языку. Наша мини-игра «Наводка» поможет вам быстро выучить много новых слов."
          rules="Ты слышишь слово. При этом не видишь, как это слово пишется по-английски. Твоя задача написать озвученное слово."
          path="/ourGame"
        />
      ) : (
        <OurGame />
      )}
    </>
  );
}
