import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import Accordion from "react-bootstrap/Accordion";
import Button from "@restart/ui/esm/Button";

import Layout from "../../../common/layout/Layout";
const Home = () => {  
  const [value, setValue] = useState('');

  const connectWallet = () =>{
    console.log("wallet connection")
  }

  const claimFun = (e) => {
    console.log("event occured", e);
  }

  const vesting = ["Vesting Point1, Vesting Point 2, Vesting Point 3"]

  return (
    <Layout>
      <section className="banner_sec">
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={12}>
            <button onClick={()=>connectWallet()}> Connect Wallet </button>
            </Col>    
            <Col xl={6} lg={12}>
              <div className="banner_content">
                <h1>DASHBOARD</h1>
                <br></br>
                
                <h3 style={{color:"white"}}>
                  Allocations
                </h3>
                <hr style={{color:"white", borderBottomColor: 'white',
              borderBottomWidth: 1}}></hr>
              
        <br></br>

           
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Project 1</Accordion.Header>
          <Accordion.Body>
              <div>
              <Button onClick={(e)=>claimFun(e)}> Claim </Button>
              </div>

              {/* {
                vesting!==undefined && vesting.length>0 &&
                  vesting.map((vest)=>{
                    console.log("vest :", vest);
                    // <p>{vest[0]}</p>
                })
              } */}
            Vesting Point 1
            Vesting Point 2
            Vesting Point 3
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Project 2</Accordion.Header>
            <Accordion.Body>
              <div>
              <Button onClick={(e)=>claimFun(e)}> Claim </Button>
              </div>

              Vesting Point 1
              Vesting Point 2
              Vesting Point 3
              
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Project 3</Accordion.Header>
            <Accordion.Body>  
              <div>
                  <Button onClick={(e)=>claimFun(e)}> Claim </Button>
              </div>
              Vesting Point 1  
              Vesting Point 2
              Vesting Point 3  
            </Accordion.Body>
        </Accordion.Item>

      </Accordion>

                </div>
              </Col>
              <Col xl={6} lg={12} className="banner-img">
              </Col>
            </Row>
          </Container>
      </section>

    </Layout>
  );
};

export default Home;
