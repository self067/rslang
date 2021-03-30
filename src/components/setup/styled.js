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
  animation-duration: 0.5s;
  text-align: center;
  outline: none;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h3`
  color: var(--dark);
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

export const ModalSubtitle = styled.p`
  color: var(--dark);
  font-size: 1.5rem;
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

export const SButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: var(--light);
  color: var(--grey);
  transition: all 0.3s ease-out;
  padding: 5px 15px;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    background: var(--blue-dark);
    color: var(--light);
    transition: 0.5s;
  }
`;

export const SI = styled.i`
  color: var(--dark);
  font-size: 2rem;
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const SInput = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 10px;
`;

export const StyledImg = styled.img`
  width: 250px;
  position: absolute;
  top: 250px;
  right: -227px;
  z-index: 1;
  @media (max-width: 960px) {
    display: none;
  }
`;
