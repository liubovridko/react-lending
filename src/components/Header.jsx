// Header.js
import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import styles from './Header.module.scss';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={styles.header}>
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">{language === 'en' ? 'Home' : 'Главная'}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/gallery">{language === 'en' ? 'Gallery' : 'Галерея'}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/service">{language === 'en' ? 'Service' : 'Сервис'}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacts">{language === 'en' ? 'Contacts' : 'Контакты'}</NavLink>
            </NavItem>
          </Nav>
          <div className={styles.languages}>
            <FaGlobe onClick={toggleLanguage} />
            <span>{language === 'en' ? 'EN' : 'UA'}</span>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
