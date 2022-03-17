import React, { useState, useEffect } from "react";
import "./HeaderStyle.scss";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/lithiumLogo.png";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={scroll ? "header_fixed" : "header_style"}>
      <Container>
        <Navbar expand="md">
          <Navbar.Brand href="/">
            {
            // props.landing ? (
              <img src={Logo} alt={"logo-icon"} width="110%" height="100%"/>
            // )
            //  : (
            //   <img src={ClrLogo} alt={"logo-icon"} />
            // )
            }
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="ms-auto">
                Projects
              </NavLink>
              <NavLink to="/">Staking</NavLink>
              <NavLink to="/">Dashboard</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
