import React, { useEffect } from 'react';
import { Button } from 'components/button';
import useModalHandler from 'hooks/useModalHandler';
import useUserInfo from 'hooks/useUserInfo';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';

const sessionName = 'rslangauth-g105';
const apiurl = process.env.REACT_APP_APIURL;

export const Auth = () => {
  const [isModalOpen, handleModal] = useModalHandler();
  const [userInfo, setUserInfo] = useUserInfo();
  // console.log(userInfo, setUserInfo);

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem(sessionName)));
  }, [setUserInfo]);

  const logoutUser = (e) => {
    const body = userInfo.info?.email || '';
    const atoken = userInfo.auth_token || '';
    sessionStorage.removeItem('travelauth');
    setUserInfo(null);

    fetch(apiurl + '/users/logout', {
      method: 'POST',

      headers: {
        'Content-type': 'Application/json',
        Authorization: 'Bearer ' + atoken,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('43=', result);
      })
      .catch((error) => console.error('catch: ', error));
  };

  return (
    <>
      {userInfo ? (
        <Button onClick={logoutUser}>
          LOG OUT
          <img src={userInfo.info?.avatar} alt="auth" />
        </Button>
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
