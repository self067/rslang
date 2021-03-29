import React, { useEffect, useState } from 'react';
import { Button } from 'components/button';
import useModalHandler from 'hooks/useModalHandler';
import useUserInfo from 'hooks/useUserInfo';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import { Avatar, AuthButton } from './styled';

const sessionName = process.env.REACT_APP_SESSIONNAME;
const apiurl = process.env.REACT_APP_APIURL;

export const Auth = () => {
  const [isModalOpen, handleModal] = useModalHandler();
  const [userInfo, setUserInfo] = useUserInfo();
  console.log(userInfo);

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem(sessionName)));
    console.log('useEf');
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
        <Button onClick={handleModal}>LOG IN</Button>
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
