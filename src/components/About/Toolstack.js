import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiComposer,
  SiPrettier,
  SiGithub,
  SiNpm,
  SiSublimetext,
  SiAnydesk,
  SiXampp,
  SiTeamviewer,
  SiDiscord,
  SiSkype,
  SiTelegram,
  SiGmail,
  SiFirefoxbrowser,
  SiOpera,
  SiAdobephotoshop,
  SiMicrosoftoffice,
  SiMicrosoftedge,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiComposer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrettier />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnydesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTeamviewer/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSkype />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTelegram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGmail />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirefoxbrowser />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftedge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
