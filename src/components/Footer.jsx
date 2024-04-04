import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.column}>
          <h5>Logo</h5>
        </div>
        <div className={styles.column}>
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.photo}></div>
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
