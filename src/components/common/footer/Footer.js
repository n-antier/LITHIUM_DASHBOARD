import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FooterStyle.scss";

const Footer = (props) => {
  return (
    <>
      <div className="footer_style">
        <div className="copyright_area">
          <Container>
            <Row className="ftr_copyright_section">
              <Col xs={12} lg={6}>
                <p className="cpyright_spce">
                  Copyright © {new Date().getFullYear()} Lithium | All
                  rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
