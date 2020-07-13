import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main.js';
import About from './components/about.js';
import Roster from './components/roster.js';
import Schedule from './components/schedule.js';
import Sponsor from './components/sponsor.js';
import Contact from './components/contact.js';
import AlertText from './components/alerttext.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/Nav';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function App() {
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }
  return (

    <div className="App">
    {/* <Container> */}
    <AlertText/>
    <div>
      <Navbar collapseOnSelect className="navbar" expand="lg" bg="primary" variant="dark" sticky="top" style={{paddingTop:'5px',paddingLeft:'5px',paddingBottom:'1px'}}>
        <Navbar.Brand href="../" style={{color:'white', fontSize:'1.5em'}}>
        <img
        alt=""
        src="/logo.png"
        width="15"
        height="35"
        className="d-inline-block align-top"
      />{' '}
      MOLLY BROWN ULTIMATE</Navbar.Brand>
        <Navbar.Toggle className="header-toggle" aria-controls="responsive-navbar-nav" bg="dark"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="" className="ml-auto">
          <Nav.Link eventKey={0} as={Link} to="about" spy={true} smooth={true} offset={50} duration={500}>About
          </Nav.Link>
          <Nav.Link eventKey={1} as={Link} to="roster" spy={true} smooth={true} offset={50} duration={500}>Roster
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="schedule" spy={true} smooth={true} offset={50} duration={500}>Schedule
          </Nav.Link>
          <Nav.Link eventKey={3} as={Link} to="sponsor" spy={true} smooth={true} offset={50} duration={500}>Sponsors
          </Nav.Link>
          <Nav.Link eventKey={4} as={Link} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact
          </Nav.Link>
          <Nav.Link eventKey={5} href="/blog">Blog
          </Nav.Link>
        </Nav>
          {/* <Nav activeKey="../" className="ml-auto">
            <Nav.Link href={Pdf}>Resume</Nav.Link>
            <Nav.Link>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    <Main/>
    <About/>
    <Roster/>
    <Schedule/>
    <Sponsor/>
    <Contact/>
    {/* </Container> */}
    </div>
  </div>);
}

export default App;
