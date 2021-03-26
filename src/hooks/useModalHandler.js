import { useState } from 'react';

const useModalHandler = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen);
  };

  return [loginOpen, handleLoginOpen];
};

export default useModalHandler;
