import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';
import LoginTab from './components/Tabs/components/LoginTab';
import RegistrationTab from './components/Tabs/components/RegistrationTab';
import {
  Container,
  IconClose,
  Overlay,
  StyledModalWindow,
} from './ModalWindow.styles';
import useUserInfo from 'hooks/useUserInfo';

const sessionName = process.env.REACT_APP_SESSIONNAME;
const apiurl = process.env.REACT_APP_APIURL;
console.log(apiurl);
console.log(sessionName);

const ModalWindow = ({ open, onClose }) => {
  const [userInfo, setUserInfo] = useUserInfo();
  console.log(userInfo);
  console.log(apiurl);
  console.log(sessionName);
  const loginUser = (email, password) => {
    const body = { email, password };
    fetch(apiurl + '/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (!result.token) {
          throw new Error(result.error);
        }
        console.log(sessionName);
        sessionStorage.setItem(sessionName, JSON.stringify(result));
        setUserInfo(result);
        setError('');
        onClose();
      })
      .catch((error) => {
        console.error('catch: ', error);
        setError(error.message);
      });
  };

  const registerUser = (name, email, password, avatar) => {
    const body = { name, email, password, avatar };
    fetch(apiurl + '/users', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (!result.id) {
          throw new Error(result.error);
        }
        loginUser(email, password);
        // setError('');
        // onClose();
      })
      .catch((error) => {
        console.error('catch: ', error);
        setError(error.message);
      });
  };

  const insideRef = React.createRef();

  const [avatarImg, setAvatarImg] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const close = (e) => {
    e.stopPropagation();
    onClose();
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const onSubmitRegistr = (e) => {
    e.preventDefault();
    registerUser('user', email, password, avatarImg);
  };

  const onSubmitLogout = (e) => {
    e.preventDefault();
    // logoutUser('seltor1@gmail.com');
  };

  const onOutClick = (e) => {
    const curRef = insideRef.current;
    if (curRef && !curRef.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', listener);
    }

    return () => document.removeEventListener('keydown', listener);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay onClick={onOutClick}>
      <Container ref={insideRef}>
        <IconClose onClick={close} src="/images/cross.svg" />
        <StyledModalWindow>
          <Tabs>
            <LoginTab
              label="login"
              onSubmit={onSubmitLogin}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
            />
            <RegistrationTab
              label="register"
              onSubmit={onSubmitRegistr}
              username={username}
              setUserName={setUserName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              avatarImg={avatarImg}
              setAvatarImg={setAvatarImg}
              error={error}
            />
          </Tabs>
        </StyledModalWindow>
      </Container>
    </Overlay>,
    document.body
  );
};

export default ModalWindow;
