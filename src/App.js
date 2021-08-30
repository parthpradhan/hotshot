import React from "react";
import './App.css';
import About from './pages/about';
import Search from './pages/search';
import Home from './pages/home';
import {Route,HashRouter,Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <HashRouter>
    <Navbar bg="light" variant="light" expand="lg">
  <Navbar.Brand className="shifter"href="#">SearchX</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link><Link className="textlink" to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link className="textlink" to="/search">Search</Link></Nav.Link>
      <Nav.Link><Link className="textlink" to="/imgsearch">Image Search</Link></Nav.Link>
      <NavDropdown title="More" id="navbarScrollingDropdown">
        <NavDropdown.Item><Link className="textlink" to="/login">Login</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link className="textlink" to="/about">About</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={Search}/>
    </div>
    <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
