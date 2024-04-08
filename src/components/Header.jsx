import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import classNames from 'classnames';
import { useLanguage } from '../LanguageContext';
import styles from './Header.module.scss';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.matchMedia('(max-width: 768px)').matches);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    } else {
      // old browser
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      } else {
        // old browser
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, [isMobile]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.header}>
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="/"><img
            alt="logo"
            src="/logo192.png"
            style={{
              height: 40,
              width: 40
            }}/>
          </NavbarBrand>
         <NavbarToggler  className={styles['custom-toggler']} onClick={toggle} />
         <Collapse isOpen={isOpen} navbar>
          <Nav className={classNames(!isMobile && styles['navbar-nav'])} navbar>
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
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
