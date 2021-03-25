import React from 'react';
import { Button } from '../button';
import {
  PromoContainer,
  PromoContent,
  PromoTitle,
  PromoSubtitle,
  PromoBttn,
  PromoIconContent,
  PromoItem,
  PromoIcon,
  PromoIconTitle,
  PromoIconSubtitle,
} from './styled';

function Promo() {
  return (
    <PromoContainer>
      <PromoContent>
        <PromoTitle>Прокачай английский c RS Lang</PromoTitle>
        <PromoSubtitle>
          RS Lang — это эффективный сервис для увлекательной практики языка.
          Более 3600 слов для изучения и повторения. Веселые мини - игры для
          практики. Присоединяйся!
        </PromoSubtitle>
        <PromoBttn>
          <Button buttonStyle="btn--light" buttonSize="btn--large">
            Начать обучение
          </Button>
          <a
            href="https://youtu.be/sn-S82mF_gw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonStyle="btn--dark" buttonSize="btn--large">
              Смотреть видео <i className="far fa-play-circle" />
            </Button>
          </a>
        </PromoBttn>
      </PromoContent>
      <PromoIconContent>
        <PromoItem>
          <PromoIcon className="fas fa-piggy-bank" />
          <PromoIconTitle>Бесплатный доступ</PromoIconTitle>
          <PromoIconSubtitle>
            Изучай язык совершенно бесплатно
          </PromoIconSubtitle>
        </PromoItem>
        <PromoItem>
          <PromoIcon className="fas fa-gamepad" />
          <PromoIconTitle>Обучение через игру</PromoIconTitle>
          <PromoIconSubtitle>
            Играя, ты сможешь легко запомнить новые слова и фразы
          </PromoIconSubtitle>
        </PromoItem>
        <PromoItem>
          <PromoIcon className="fas fa-headphones" />
          <PromoIconTitle>Аудирование</PromoIconTitle>
          <PromoIconSubtitle>
            Все слова и фразы ты можешь прослушать и повторить
          </PromoIconSubtitle>
        </PromoItem>
        <PromoItem>
          <PromoIcon className="fas fa-calendar-check" />
          <PromoIconTitle>Занимайся каждый день</PromoIconTitle>
          <PromoIconSubtitle>
            Всего 10 мин и ты выучишь 20 новых слов ежедневно!
          </PromoIconSubtitle>
        </PromoItem>
      </PromoIconContent>
    </PromoContainer>
  );
}

export default Promo;
