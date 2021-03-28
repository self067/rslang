import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AvaImg,
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

// import regTranslation from './locale';

export default function RegistrationTab({
  onSubmit,
  username,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  avatarImg,
  setAvatarImg,
  error,
}) {
  const onHandleTabSwitch = useContext(TabsContext);

  const onImgChanged = (e) => {
    if (e.target.files.length) {
      if (e.target.files[0].size > 2048000) {
        e.target.value = '';
        setAvatarImg('');
        alert('File is too big');
        return;
      }
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        setAvatarImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <LoginHeading>
        <h2>Регистрация</h2>
      </LoginHeading>
      <Form onSubmit={onSubmit} autoComplete="new-password">
        <FormFieldContainer>
          <span>
            <img src={emailIcon} alt="email" />
          </span>
          <div>
            <input
              autoComplete="off"
              name="name"
              type="text"
              required
              maxLength="60"
              minLength="4"
              placeholder="Имя"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </FormFieldContainer>{' '}
        <FormFieldContainer isEmail>
          <span>
            <img src={emailIcon} alt="email" />
          </span>
          <div>
            <input
              autoComplete="new-password"
              name="email"
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
              name="password"
              type="password"
              required
              maxLength="60"
              minLength="2"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <FormFieldContainer>
          <label htmlFor="upload">Загрузить аватарку</label>
          <AvaImg src={avatarImg} />
          <input
            id="upload"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={onImgChanged}
            required
          />
        </FormFieldContainer>
        <MessageLine>{error}</MessageLine>
        <LoginButtonWrapper>
          <button type="submit">Зарегистрироваться</button>
        </LoginButtonWrapper>
      </Form>
      <div>
        <p>Уже есть аккаунт?</p>
        <SwitchTabButton onClick={onHandleTabSwitch('login')}>
          Войти
        </SwitchTabButton>
      </div>
    </>
  );
}

RegistrationTab.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  avatarImg: PropTypes.string.isRequired,
  setAvatarImg: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
