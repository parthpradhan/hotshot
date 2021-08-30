import React from "react";
import '../App.css';
import {Card,Button,Carousel,Container,Row,Col} from 'react-bootstrap';
import { IoIosTimer,IoMdHome,IoIosShare,IoIosBrowsers } from "react-icons/io";
function Home() {
  return (
    <div className="App">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="75%"
      alt="First slide"
    />
    <Carousel.Caption className="lm">
      <h1 className="gop">SearchX</h1>
      <br/><br/><br/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="75%"
      alt="Second slide"
    />

    <Carousel.Caption className="lm">
      <h2>Image Search Capability</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="75%"
      alt="Third slide"
    />

    <Carousel.Caption className="lm">
      <h2>Family Friendly Content</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <Container className="text-center">
    <h1 >Introduction</h1>
    <br/>
    <p>SearchX connects its users to the vast visual resources of the internet where X stands for anything , be it searching for images for wildlife or architrctural marvels. 
    <br/><br/>When a user sends a query to SearchX the result is received as a set of thumbnail images that are sorted to ensure that they are as highly relevant as possible. When the user clicks on a thumbnail they are linked to the original web site where that image is located plus there is also a quality of life feature to get Full HD view as well. <br/><br/> Users can also submit an image which then gets stored in the database to match and find relevant images easily.
<br/><br/>
 Content allowed is family friendly and allows children to surf in safety. The site is also very user friendly as it's designed to be simple, fast and accurate. Due to all of these features,SearchX is perfect for fun, school, business and families!
    </p>
    </Container>
    <Container >
      <Row className="text-center">
      <h1>Features</h1>
      </Row>
      <br/><br/>
      <Row>
      <Col>
      <Card >
  <Card.Header as="h5">Ultrafast and Efficient</Card.Header>
  <Card.Body>
    <Card.Text>
      <Row className="text-center">
        <Col><IoIosTimer style={{fontSize:75}}/></Col>
        <Col>SearchX allows the user to quickly search for whatever the user desires.</Col>
      </Row>
    </Card.Text>
  </Card.Body>
</Card>
      </Col>
      <Col>
             
<Card>
  <Card.Header as="h5">Image Search</Card.Header>
  <Card.Body>
    <Card.Text>
    <Row className="text-center">
        <Col><IoIosShare style={{fontSize:75}}/></Col>
        <Col>User can upload an image can find similar images with one click of a button.</Col>
      </Row>
    </Card.Text>
  </Card.Body>
</Card>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col>
      <Card>
  <Card.Header as="h5">Quality Variation</Card.Header>
  <Card.Body>
    <Card.Text>
    <Row className="text-center">
        <Col><IoIosBrowsers style={{fontSize:75}}/></Col>
        <Col>Users can click on an image to find multiple variations of the image.</Col>
      </Row>
    </Card.Text>
  </Card.Body>
</Card>
      </Col>
      <Col>
             
<Card>
  <Card.Header as="h5">Family Friendly</Card.Header>
  <Card.Body>
    <Card.Text>
    <Row className="text-center">
        <Col><IoMdHome style={{fontSize:75}}/>
       </Col>
        
        <Col>The content displayed is perfectly safe for people of all age groups.</Col>
      </Row>
    </Card.Text>
  </Card.Body>
</Card>
      </Col>
      </Row>
      

    </Container>
   

    </div>
  );
}
export default Home;