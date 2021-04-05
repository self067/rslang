import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormFieldContainer,
  LoginButtonWrapper,
  LoginHeading,
  MessageLine,
  SwitchTabButton,
} from 'components/ModalWindow/ModalWindow.styles';
import emailIcon from 'components/ModalWindow/images/email.svg';
import passwordIcon from 'components/ModalWindow/images/lock.svg';
import { TabsContext } from 'components/ModalWindow/components/Tabs';


export default function LoginTab({
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  error,
}) {
  const onHandleTabSwitch = useContext(TabsContext);

  return (
    <>
      <LoginHeading>
        <h2>Логин</h2>
      </LoginHeading>
      <Form id="loginform" onSubmit={onSubmit} autoComplete="off">
        <FormFieldContainer isEmail>
          <span>
            <img src={emailIcon} alt="email" />
          </span>
          <div>
            <input
              autoComplete="off"
              type="email"
              required
              maxLength="60"
              minLength="7"
              placeholder="Адрес электронной почты"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <FormFieldContainer>
          <span>
            <img src={passwordIcon} alt="password" />
          </span>
          <div>
            <input
              autoComplete="off"
              type="password"
              required
              minLength="1"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <MessageLine>{error}</MessageLine>
        <LoginButtonWrapper>
          <button type="submit">Вход</button>
        </LoginButtonWrapper>
      </Form>
      <div>
        <p>Всё ещё нет аккаунта?</p>
        <SwitchTabButton onClick={onHandleTabSwitch('register')}>
          Зарегистрироваться
        </SwitchTabButton>
      </div>
    </>
  );
}

LoginTab.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
