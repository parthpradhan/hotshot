import React from "react";
import '../App.css';
import {Container,Row} from 'react-bootstrap';
function Footer() {
  return (
    <>
    <Container className="footer">
      <Row className="text-center">
        <h3><i>SearchX :  Designed to be simple, fast and accurate</i></h3>  
        <h4 style={{fontWeight:"lighter"}}>Copyright &#169;2021 : Hotshot</h4>
      </Row>
    </Container>
    </>
  );
}
export default Footer;