import React, { useState } from 'react';
import StartPage from '../components/startPage';
import AudioСall from '../AudioСall/components/AudioCallGame';

export default function AudioСallStartPage() {
  const [isGame, setIsGame] = useState(false);
  return (
    <>
      {!isGame ? (
        <StartPage
          setIsGame={setIsGame}
          name="«Аудиовызов»"
          description="Аудирование для многих, пожалуй, самый сложный навык. Понять
            иностранную речь бывает очень трудно: половину слов ты не успеваешь
            расслышать и понять. Из-за этого теряется смысл высказывания в
            целом. Особенно, если это телефонный разговор, или у тебя нет
            контекста события. И, в отличие от фильма с субтитрами, при живом
            общении полагаться можно только на свой слух. Получить подсказку
            будет неоткуда. Никто не покажет, как пишется слово."
          rules="Ты слышишь слово и видишь 5 вариантов его перевода. При этом не
            видишь, как это слово пишется по-английски. Твоя задача выбрать
            правильный перевод озвученного слова."
          path="/audioGame"
        />
      ) : (
        <AudioСall />
      )}
    </>
  );
}
