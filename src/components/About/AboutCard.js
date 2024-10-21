import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Abed AL-Rahman</span> from
  <span className="purple"> Jordan.</span>
  <br />
  I have completed an internship from Code Fellows through LTUC.
  <br />
  I have also completed an International Diploma in Software Engineering
  from Luminus Technical University College.
  <br />
  Additionally, I hold a Turkish language certificate from Karabuk University
  in Ankara, Turkey.
  <br />
  <br />
  Besides coding, some other activities that I enjoy include:
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Photo Design and Video Editing
  </li>
  <li className="about-activity">
    <ImPointRight /> Drawing
  </li>
  <li className="about-activity">
    <ImPointRight /> Playing Volleyball
  </li>
</ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Climb mountains not to so the world can see you , but so you can see the world!"{" "}
          </p>
          <footer className="blockquote-footer">A13</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
