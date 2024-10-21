import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I'm a Full-Stack Developer with a strong foundation in .NET technologies
      and hands-on experience in front-end and back-end development.
      <br />
      <br />I am proficient in classics like
      <i>
        <b className="purple"> C#, HTML, CSS, JavaScript, and React.</b>
      </i>
      <br />
      <br />
      My field of interest includes building web applications, APIs, and
      e-commerce platforms, with expertise in third-party API integration and
      back-end deployment.
      <i>
        <b className="purple">
          {" "}
          Web Technologies and Products.
        </b>
        <br />
        <br />
        <b className="purple">
          {" "}
          Problem-solving and delivering high-quality projects are my strengths.
        </b>
      </i>
      <br />
      <br />
      I am also fluent in
      <i>
        <b className="purple">
          {" "}
          Arabic, English, and Turkish.
        </b>
      </i>
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

<Row>
  <Col md={12} className="home-about-social">
    <h1>FIND ME ON</h1>
    <p>
      Feel free to <span className="purple">connect </span>with me
    </p>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Abed1313"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/abed-al-rahman-radwan/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="mailto:abedalrahmanradwanaar@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <span style={{ fontSize: "1.5em" }}>✉️</span> {/* يمكنك استخدام رمز بريد هنا */}
        </a>
      </li>
    </ul>
  </Col>
</Row>

      </Container>
    </Container>
  );
}
export default Home2;
