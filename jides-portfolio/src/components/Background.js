import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Background() {
  return (
    <Container className="backgroundContainer" >
      <Row>
        <Col>
          <Card className="backgroundcard">
            <Card.Title>
              Bachelor of Science in Mechanical Engineering from the University
              of Texas at San Antonio.<br></br>
              Full Stack Engineering Certificate from University of Texas at
              Austin.
            </Card.Title>
            <Card.Text>
              My areas of expertise are Full-Stack Engineering/Web-Development,
              Robotics, PLC programming, Robot programming, HMI programming and
              Industrial Automation.
            </Card.Text>
            <Card.Body>
              Programming Languages: JSX, JavaScript (ES5/ES6), HTML5, CSS3,
              jQuery, JSON, AJAX, XML <br></br>
              Front-End: ReactJS, React-Router, React-Redux, React-Hooks,
              Angular, BootStrap, Bulma, Sass <br></br>
              Back-End:Node.js, Express, Axios, MySQL, MongoDB, Axios, RESTful
              API, GraphQL, knexJS ORM, Sequelize ORM, Handlebars.js<br></br>
              Testing/Deployment: Mocha, Chai, Amazon AWS (EC2/ S3/ RDS), Jest,
              Heroku, Azure, MERN <br></br>
              Developer Tools: Git, NPM, Webpack, Babel, Postman, Chrome
              DevTools, Agile Methodology, JIRA
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
      <div>
        <button className="download">
          <a
            className="download"
            href="../assets/resume/Jide_FS_ Resume_1.0.docx.pdf"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
    </Container>
  );
}

export default Background;
