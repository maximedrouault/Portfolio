import React, { useState, useEffect, useRef } from 'react';
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
  Button,
} from 'reactstrap';
import { Icon } from '@iconify/react';

const Navigation = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const collapseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    headroom.init();

    return () => {
      headroom.destroy();
    };
  }, []);


  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleLinkClick = () => {
    setCollapseOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (collapseRef.current && !collapseRef.current.contains(event.target as Node)) {
        setCollapseOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);



  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleCollapse();
  };


  return (
    <>
      <header className="header-global">
        <a href="#" id="backToTop" title="Remonter en haut de la page">
          <Icon icon="material-symbols:arrow-circle-up-rounded" color="black" width="50" height="50" />
        </a>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
              onClick={handleToggleClick}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              isOpen={collapseOpen}
              innerRef={collapseRef}
              onClick={handleToggleClick}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="10">
                    <h3 className="text-black nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="2">
                    <button className="navbar-toggler" id="navbar_global" onClick={handleToggleClick}>
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
                    href="#skills"
                    onClick={handleLinkClick}
                  >
                    Compétences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes formations"
                    className="nav-link-icon"
                    href="#educations"
                    onClick={handleLinkClick}
                  >
                    Formations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"

                    aria-label="Mes expériences"
                    className="nav-link-icon"
                    href="#experiences"
                    onClick={handleLinkClick}
                  >
                    Expériences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Commentaires"
                    className="nav-link-icon"
                    href="#feedback"
                    onClick={handleLinkClick}
                  >
                    Commentaires
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Mes projets"
                    className="nav-link-icon"
                    href="#projects"
                    onClick={handleLinkClick}
                  >
                    Projets
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Contactez-moi"
                    className="nav-link-icon"
                    href="#contact-me"
                    style={{ fontWeight: "bold" }}
                    onClick={handleLinkClick}
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