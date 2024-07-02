import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bg7.png"; 
import Tilt from "react-parallax-tilt";
import AOS from 'aos';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" data-aos="fade-right">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Welcome <span className="purple"> to </span> GameXperts
            </h1>
            <p className="home-about-body">
            At GameXperts, we are passionate about gaming and dedicated 
            to providing the ultimate gaming experience 
              <br />
              <br />Whether you're a seasoned gamer or just starting your journey,
               we have everything you need to take your gaming to the next level.
              <i>
                <b className="purple"> Fun, Life. </b>
              </i>
              <br />
              <br />
              we've got the scoop on the must-play titles &nbsp;
              <i>
                <b className="purple">that are shaking up the gaming world. </b> and
                also in areas related to{" "}
                <b className="purple">
                GameXperts.
                </b>
              </i>
              <br />
              <br />
             
              <i>
                
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
           <img src={myImg} className="img-fluid" alt="avatar"  width="4000%" height="4000%"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Download The Game</h1>
            <p>
         <span className="purple"> </span>
            </p>
            <a href="https://gamexs.tyinf.com/" className="shadow__btn">
  Start Game
</a>
&nbsp; &nbsp;
<a href="https://www.upload-apk.com/JpLTzxWvTijVOBk" className="shadow__btn">
  Download APP
</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
AOS.init();
export default Home2;
