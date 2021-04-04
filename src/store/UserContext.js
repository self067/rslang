import { createContext } from 'react';

const userInfo = { name: '', email: '' };

export const UserContext = createContext(userInfo);
