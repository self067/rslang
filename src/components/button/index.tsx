import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './s.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  buttonSize?: string;
  buttonStyle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle = '',
  buttonSize = '',
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
