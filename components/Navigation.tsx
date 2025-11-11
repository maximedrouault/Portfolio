import React, { useState, useEffect } from 'react';
import { greetings } from '../portfolio';
import Headroom from 'headroom.js';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Icon } from '@iconify/react';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  const closeMenu = () => {
    const toggler = document.getElementById('navbar_global');
    if (toggler) {
      toggler.click();
    }
  };

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <a href="#" id="backToTop" title="Remonter en haut de la page">
          <Icon
            icon="material-symbols:arrow-circle-up-rounded"
            color="black"
            width="50"
            height="50"
          />
        </a>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container className="justify-content-between">
            <NavbarBrand href="/" className="mr-lg-5">
              <h1 className="text-white nav-title">{greetings.name}</h1>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row className="justify-content-between">
                  <Col className="collapse-brand" xs="auto">
                    <h3 className="text-black nav-title">{greetings.name}</h3>
                  </Col>
                  <Col className="collapse-close align-content-center" xs="auto">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes compétences"
                    className="nav-link-icon"
                    href={'#skills'}
                    onClick={closeMenu}
                  >
                    Compétences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes formations"
                    className="nav-link-icon"
                    href={'#educations'}
                    onClick={closeMenu}
                  >
                    Formations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes expériences"
                    className="nav-link-icon"
                    href={'#experiences'}
                    onClick={closeMenu}
                  >
                    Expériences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Références"
                    className="nav-link-icon"
                    href={'#feedback'}
                    onClick={closeMenu}
                  >
                    Références
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes projets"
                    className="nav-link-icon"
                    href={'#projects'}
                    onClick={closeMenu}
                  >
                    Projets
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Contactez-moi"
                    className="nav-link-icon"
                    href={'#contact-me'}
                    style={{ fontWeight: 'bold' }}
                    onClick={closeMenu}
                  >
                    Contactez-moi !
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
