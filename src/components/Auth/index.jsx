import React, { useEffect } from 'react';
import { Button } from 'components/button';
import useModalHandler from 'hooks/useModalHandler';
import useUserInfo from 'hooks/useUserInfo';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import { Avatar, AuthButton } from './styled';

const sessionName = process.env.REACT_APP_SESSIONNAME;

export const Auth = () => {
  const [isModalOpen, handleModal] = useModalHandler();
  const [userInfo, setUserInfo] = useUserInfo();

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem(sessionName)));
  }, [setUserInfo]);

  const logoutUser = (e) => {
    sessionStorage.removeItem(sessionName);
    setUserInfo(null);
  };

  return (
    <>
      {userInfo ? (
        <AuthButton
          onClick={() => {
            logoutUser();
          }}
        >
          <Avatar src={userInfo.avatar} alt="auth" />
          <div>{userInfo.name}</div>
        </AuthButton>
      ) : (
        <Button onClick={handleModal}>Вход</Button>
      )}

      <ModalWindow
        open={isModalOpen}
        onClose={handleModal}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </>
  );
};

Auth.defaultProps = {
  userInfo: {},
  setUserInfo: () => {},
};

Auth.propTypes = {
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};
