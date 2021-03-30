import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import {
  SModal,
  ModalTitle,
  ModalInfo,
  ModalSubtitle,
  SButton,
  SI,
  SInput,
  StyledImg,
} from './styled';

const ModalSetup = ({ isChecked, setIsChecked }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    localStorage.setItem('setup', JSON.stringify(isChecked));
  });

  const handleChange = ({ target: { name, checked } }) => {
    setIsChecked({
      ...isChecked,
      [name]: checked,
    });
  };

  const checkboxTranslation = [
    {
      key: 'wordTranslate',
      name: 'wordTranslate',
      title: 'Показывать перевод слова',
    },
    {
      key: 'definitionTranslate',
      name: 'definitionTranslate',
      title: 'Показывать перевод значения',
    },
    {
      key: 'sentenceTranslate',
      name: 'sentenceTranslate',
      title: 'Показывать перевод примера',
    },
    {
      key: 'transcription',
      name: 'transcription',
      title: 'Показывать транскрипцию слова',
    },
  ];

  const checkboxShowBttn = [
    {
      key: 'difficultWords',
      name: 'difficultWords',
      title: 'Перемещать в сложные слова',
    },
    {
      key: 'deleteWords',
      name: 'deleteWords',
      title: 'Перемещать в удаленные слова',
    },
  ];

  return (
    <>
      <Button
        buttonStyle="btn--light"
        buttonSize="btn--middle"
        onClick={handleOpenModal}
      >
        <i className="fas fa-cog" />
      </Button>
      <SModal
        isOpen={modalIsOpen}
        contentLabel="Setup Modal"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <SButton onClick={handleCloseModal}>
          <SI className="fas fa-times" />
        </SButton>

        <ModalTitle>Настройки учебника</ModalTitle>
        <ModalInfo>
          {checkboxTranslation.map((item, index) => (
            <ModalSubtitle key={index}>
              {item.title}
              <SInput
                type="checkbox"
                key={item.key}
                name={item.name}
                checked={isChecked[item.name]}
                onChange={handleChange}
              />
            </ModalSubtitle>
          ))}

          {checkboxShowBttn.map((item, index) => (
            <ModalSubtitle key={index}>
              {item.title}
              <SInput
                type="checkbox"
                key={item.key}
                name={item.name}
                checked={isChecked[item.name]}
                onChange={handleChange}
              />
            </ModalSubtitle>
          ))}
        </ModalInfo>
        <StyledImg src="images/characters/13.png" alt="character" />
      </SModal>
    </>
  );
};

export default ModalSetup;

ModalSetup.defaultProps = {
  isChecked: {},
  setIsChecked: () => {},
};

ModalSetup.propTypes = {
  isChecked: PropTypes.object,
  setIsChecked: PropTypes.func,
};
