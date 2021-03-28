import { useState } from 'react';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const handleLoginOpen = () => {
  //   setLoginOpen(!loginOpen);
  // };
  return [userInfo, setUserInfo];
};

export default useUserInfo;
