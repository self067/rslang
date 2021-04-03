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

const sessionName = process.env.REACT_APP_SESSIONNAME;
const apiurl = process.env.REACT_APP_APIURL;

const ModalWindow = ({ open, onClose, userInfo, setUserInfo }) => {
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
      .then((response) => {
        if (response.status === 200) {
          setError('');
          return response.json();
        } else if (response.status === 404) {
          setError('No such user');
          return { error: response.status + response.statusText };
        } else {
          setError(response.statusText);
          console.log(response);
          return { error: response.status + response.statusText };
        }
      })
      .then((result) => {
        console.log(result);
        if (!result) return;
        if (!result.token) {
          throw new Error(result.error);
        }

        sessionStorage.setItem(sessionName, JSON.stringify(result));
        setUserInfo(result);
        setError('');
        onClose();
      })
      .catch((error) => {
        console.error('catch: ', error);
        // setError(error.message);
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
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setError('');
          return response.json();
        } else if (response.status === 417) {
          setError('Email already exist');
          return { error: response.status + response.statusText };
        } else {
          setError(response.statusText);
          console.log(response);
          return { error: response.status + response.statusText };
        }
      })
      .then((result) => {
        console.log(result);
        if (!result) return;
        if (!result.id) {
          throw new Error(result.error);
        }
        loginUser(email, password);
      })
      .catch((error) => {
        console.error('catch: ', error);
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
    registerUser(username, email, password, avatarImg);
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
