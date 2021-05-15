import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  overscroll-behavior: contain;

  @media only screen and (max-width: 540px) {
    align-items: stretch;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 440px;
  padding: 30px 40px;
  text-align: center;
  background: white;
  border: none;
  border-radius: 20px;

  @media only screen and (max-width: 540px) {
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    align-items: center;
  }
`;

const IconClose = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Form = styled.form``;

const LoginHeading = styled.div``;

const LoginButtonWrapper = styled.div`
  button {
    border: none;
    cursor: pointer;

    width: 100%;
    font-size: 18px;
    padding: 12px 15px;
    background-color: var(--color-submit);
    color: white;
    transition: 150ms all linear;
    border-radius: 5px;

    &:hover {
      background-color: var(--color-submit-hover);
    }
  }
`;

const StyledModalWindow = styled.div`
  max-width: 500px;
  height: auto;

  background: white;
  border-radius: 20px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const FormFieldContainer = styled.div`
  position: relative;
  margin-bottom: 30px;

  span {
    content: '';
    font-size: 16px;
    left: 8px;
    line-height: 1;
    margin-top: 12px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 24px;
    height: 24px;
    z-index: 2;
    background: none;

    img {
      max-width: 100%;
    }
  }

  label {
    display: block;
    line-height: 1.43;
    color: #1c1d1f;
    background-color: #fff;
    background-image: none;
    border: 1px solid #6a6f73;
    box-shadow: none;
    transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;

    border-radius: 5px;
    font-size: 18px;
    height: auto;
    padding: 12px 45px 12px 40px;
  }

  input[type='file'] {
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 8px;
    font-size: 17px;
    color: #b8b8b8;
  }

  div {
    input {
      display: block;
      line-height: 1.43;
      color: #1c1d1f;
      background-color: #fff;
      background-image: none;
      border: 1px solid #6a6f73;
      box-shadow: none;
      transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;

      border-radius: 5px;
      font-size: 18px;
      height: auto;
      padding: 12px 45px 12px 40px;
    }
  }
`;

const SwitchTabButton = styled.button`
  cursor: pointer;
  background: none;

  padding: 12px 10px;
  font-weight: 700;
  color: var(--color-submit);
  border: 1px solid var(--color-submit);
  border-radius: 5px;
  transition: 150ms all linear;

  &:hover {
    background-color: var(--color-submit);
    color: white;
  }
`;

export const MessageLine = styled.div`
  color: red;
`;

export const AvaImg = styled.img`
  text-align: center;
  width: 200px;
  height: auto;
`;

export {
  Overlay,
  Container,
  IconClose,
  StyledModalWindow,
  ButtonsBlock,
  FormFieldContainer,
  LoginHeading,
  LoginButtonWrapper,
  Form,
  SwitchTabButton,
};
