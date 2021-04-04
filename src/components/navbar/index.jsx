import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Auth } from '../Auth';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            RS Lang
            <i className="fab  fa-quinscape" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dictionary"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Учебник
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-links" onClick={closeMobileMenu}>
                Мини-игры
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/statistic"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Статистика
              </Link>
            </li>

            <li className="nav-item">
              <Auth buttonStyle="btn--outline" onClick={closeMobileMenu} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
