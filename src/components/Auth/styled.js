import styled from 'styled-components';
import { Button } from 'components/button';

export const Avatar = styled.img`
  width: 50px;
  padding: 5px;
`;

export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 10px;
  border: none;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  background-color: var(--light);
  color: var(--grey);
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    background: var(--blue-dark);
    color: var(--light);
    transition: 0.5s;
  }
`;
