import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSteam, SiEpicgames, SiXbox, SiPlaystation, SiNintendo } from 'react-icons/si';
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSteam />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEpicgames />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaystation />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNintendo />
      </Col>
    </Row>
  );
}

export default Toolstack;
