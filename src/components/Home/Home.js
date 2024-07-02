import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Assets/bg4.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AOS from 'aos';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"> GameXperts</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <div className="image-container">
  <img
    src={Logo}
    alt="home pic"
    className="img-fluid"
    data-aos="fade-left"
  />
</div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
AOS.init();
export default Home;
