import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
    <Container>
      <Row>
        <Col md={4} className="mb-3 mb-md-0">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="img-fluid" />
          </Link>
        </Col>
        <Col md={4} mb={3} mb-md={0} className="mb-3 mb-md-0">
          <h5>Navigation</h5>
          <Row>
            <Col xs={6}>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/service">Service</Link></li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul className="list-unstyled">
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col xs={4} className="mb-3 mb-md-0">
              <img src="/photo1.jpg" alt="Photo 1" className="img-fluid" />
            </Col>
            <Col xs={8}>
              <p>Text 1</p>
              <p>Text 2</p>
              <p>Text 3</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
