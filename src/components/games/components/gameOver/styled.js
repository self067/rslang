import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {top: -300px; opacity:0}
  to {top: 100px; opacity:1}
`;

export const SModal = styled(Modal)`
  position: absolute;
  top: 15%;
  left: 25%;
  width: 50%;
  background: linear-gradient(90deg, var(--blue-light) 0%, var(--light) 100%);
  border: 1px solid #fff;
  animation-name: ${animate};
  animation-duration: 1.5s;
  text-align: center;
  outline: none;
  @media (max-width: 960px) {
    top: 15%;
    left: 10%;
    width: 80%;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ModalTitle = styled.h3`
  color: var(--blue-dark);
  font-weight: 700;
  font-size: 2.5rem;
  margin: 4rem auto 2rem;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 5rem auto 1.5rem;
  }
`;

export const ModalSubtitle = styled.div`
  color: var(--dark);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  :last-child {
    margin-bottom: 5rem;
  }
`;

export const StyledImg = styled.img`
  width: 250px;
  position: absolute;
  top: -15px;
  right: -222px;
  z-index: 1;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const StyledResults = styled.p`
  font-size: 2rem;
  text-align: center;
  padding-left: 1rem;
  color: var(--blue-dark);
  font-weight: 700;
`;

export const StyledVolumeIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const StyledWords = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledWordElem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px;
`;
