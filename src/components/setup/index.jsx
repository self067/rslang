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

const ModalSetup = ({ translate, setTranslate, showBttn, setShowBttn }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    localStorage.setItem('setupTranslate', JSON.stringify(translate));
    localStorage.setItem('setupBttn', JSON.stringify(showBttn));
  }, [translate, showBttn]);

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
          <ModalSubtitle>
            Переводить слова и значения
            <SInput
              type="checkbox"
              checked={translate}
              onChange={() => setTranslate(!translate)}
              id="checkbox1"
            />
          </ModalSubtitle>
          <ModalSubtitle>
            Показывать кнопки
            <SInput
              type="checkbox"
              checked={showBttn}
              onChange={() => setShowBttn(!showBttn)}
              id="checkbox2"
            />
          </ModalSubtitle>
        </ModalInfo>
        <StyledImg src="images/characters/13.png" alt="character" />
      </SModal>
    </>
  );
};

export default ModalSetup;

ModalSetup.defaultProps = {
  showBttn: true,
  setShowBttn: () => {},
  translate: true,
  setTranslate: () => {},
};

ModalSetup.propTypes = {
  showBttn: PropTypes.bool,
  setShowBttn: PropTypes.func,
  translate: PropTypes.bool,
  setTranslate: PropTypes.func,
};
