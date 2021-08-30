import React from "react";
import '../App.css';
import {Container,Row,Col,Button,Image} from 'react-bootstrap';
import parth from '../img/parth.png';
import harshit from '../img/harshit.png';
import ayush from '../img/ayush.png';
import kota from '../img/kota.png';

function About() {
  return (
    <div className="App bl">
      <Container className="text-center infa">
        <Row>
          <Col>
          <Image src={parth} roundedCircle className="imghelp"/>
          <br/><br/>
          <h4 className="name">Parth Shankar Pradhan</h4>
          <h6 className="namesub">Frontend + API</h6>
          <br/>
          <p className="parap">Responsible for designing and making of the project in React and working with the search api</p>
          <Button variant="light"href="">Github</Button>
          </Col>
          <Col>
          <Image src={ayush} roundedCircle className="imghelp"/>
          <br/><br/>
          <h4 className="name">Ayush Kumar Singh</h4>
          <h6 className="namesub">Frontend</h6>
          <br/>
          <p className="parap">Responsible for designing and making of the project using HTML | CSS | JS</p>
          <Button variant="light"href="">Github</Button>
          </Col>
          <Col>
          <Image src={kota} roundedCircle className="imghelp"/>
          <br/><br/>
          <h4 className="name">Rohan Kotagiri</h4>
          <h6 className="namesub">Machine Learning</h6>
          <br/>
          <p className="parap">Responsible for implementing image search using machine learning using python</p>
          <Button variant="light"href="">Github</Button>
          </Col>
          <Col>
          <Image src={harshit} roundedCircle className="imghelp"/>
          <br/><br/>
          <h4 className="name">Harshit Srivastava</h4>
          <h6 className="namesub">Backend</h6>
          <br/>
          <p className="parap">Responsible for backend work regarding login, signup with MySQL</p>
          <Button variant="light"href="">Github</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;