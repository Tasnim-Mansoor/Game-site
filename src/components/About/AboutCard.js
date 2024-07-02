import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,We are <span className="purple">GameXperts</span>
            Who <span className="purple"> give you fun</span>
            <br />
            real-time game, you'll need to carefully manage your resources,
            <br />maneuvers to outsmart your opponents 
            and secure the safety of the Milky Way.
            <br />
            <br />
            
            What you will gain with us
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enjoy  
            </li>
            <li className="about-activity">
              <ImPointRight /> Play
            </li>
            <li className="about-activity">
              <ImPointRight /> Have Fun
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
