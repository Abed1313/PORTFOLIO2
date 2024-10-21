import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HomeLinkedIn from "../../Assets/Projects/HomeLinkedIn.PNG";
import frontend3 from "../../Assets/Projects/frontend3.jpeg";
import Charging_Management from "../../Assets/Projects/Charging_Management.jpg";
import Smart_Home from "../../Assets/Projects/Smart_Home.jpeg";
import AQWorldsPromo from "../../Assets/Projects/AQWorldsPromo.jpg";
import Red_Triangel from "../../Assets/Projects/Red_Triangel.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smart_Home}
              isBlog={false}
              title="Smart Home"
              description="The Smart Home System is designed to manage and automate tasks within a smart home environment. Users, including Admins, Guests, and Providers, can interact with various components such as devices, rooms, access controls, and scenes. The system allows centralized control and monitoring, making home automation accessible and customizable."
              ghLink="https://github.com/Abed1313/SmartHomeSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Red_Triangel}
              isBlog={false}
              title="Red-Triangle"
              description="Red Triangle is a React-based web app for buying and renting properties. It allows users to browse listings, filter by location, price, and property type, and view detailed property information. Sellers and agents can list properties, while buyers can schedule viewings and communicate through integrated messaging."
              ghLink="https://github.com/Red-Triangle-Project"
              demoLink="https://curious-clafoutis-499a1c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AQWorldsPromo}
              isBlog={false}
              title="Adventure-Quest-RPG"
              description="AdventureQuestRPG is a text-based role-playing game where players control a character named Abood, who battles various monsters and levels up by gaining experience points. The game includes various elements like characters, monsters, battles, items, and different locations for adventures."
              ghLink="https://github.com/Abed1313/Adventure-Quest-RPG"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Charging_Management}
              isBlog={false}
              title="EV Management"
              description="The EV Management System API is a robust web application designed to facilitate electric vehicle (EV) management, including user authentication, booking charging stations, managing service requests, and handling user feedback. This API leverages ASP.NET Core, Entity Framework Core, and Microsoft SQL Server."
              ghLink="https://github.com/LTUCProject/MidProject"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeLinkedIn}
              isBlog={false}
              title="Dern-Support"
              description="The Dern-Support System is a software solution designed for Dern-Support, an IT technical support company. The system manages various business operations such as customer accounts, support requests, repair scheduling, quotes, and stock management. It includes features for managing both individual and business customers, allowing users to submit support requests, receive quotes, and schedule repair jobs."
              ghLink="https://github.com/Abed1313/Dern-Support-System"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontend3}
              isBlog={false}
              title="Movie Library"
              description="The Movie Library project is a web application that allows users to browse the latest movies organized by categories such as genre and popularity. Users can specific movies and view detailed information, including synopses, cast, and ratings. The app includes features for user ratings and reviews, enabling users to share their opinions. Its responsive design ensures accessibility across various devices. The project utilizes React."
              ghLink="https://github.com/Abed1313/Movies-Library"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
