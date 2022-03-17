import React from "react";
import { Container } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./LayoutStyle.scss";

const Layout = (props) => {
  return (
    <>
      <Header {...props} />
      <Container fluid className={`layoutStyle ${props.className}`}>
        {props.children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
