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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Helmet from "react-helmet";
// import NavItem from 'react-bootstrap/Nav';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
function App() {
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }
if (isBrowser){
  return (

    <div className="App">
    <Helmet>
<title>Molly Brown Ultimate</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" data-react-helmet="true"/>
<meta name="description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>

<meta itemprop="name" content="Molly Brown Ultimate"/>
<meta itemprop="description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta itemprop="image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

<meta property="og:url" content="https://www.coloradomollybrown.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Molly Brown Ultimate"/>
<meta property="og:description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta property="og:image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Molly Brown Ultimate"/>
<meta name="twitter:description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta name="twitter:image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

    </Helmet>
    {/* <Container> */}
    <AlertText/>
    <div>

      <Navbar collapseOnSelect className="navbar" expand="lg" bg="primary" variant="dark" sticky="top" style={{width: '100%', paddingTop:'5px',paddingLeft:'5px',paddingBottom:'1px'}}>
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

          <Nav.Link eventKey={0} as={Link} to="about" spy={true} smooth={true} offset={-30} duration={500}>About
          </Nav.Link>
          <Nav.Link eventKey={1} as={Link} to="roster" spy={true} smooth={true} offset={-60} duration={500}>Roster
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
  </div>)
}else{
  return (

    <div className="App">
    <Helmet>
<title>Molly Brown Ultimate</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" data-react-helmet="true"/>
<meta name="description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>

<meta itemprop="name" content="Molly Brown Ultimate"/>
<meta itemprop="description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta itemprop="image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

<meta property="og:url" content="https://www.coloradomollybrown.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Molly Brown Ultimate"/>
<meta property="og:description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta property="og:image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Molly Brown Ultimate"/>
<meta name="twitter:description" content="The official website for the Molly Brown ultimate frisbee team based out of Denver, Boulder, and Fort Collins. The team competes in the USA Ultimate Club Womxn's Division."/>
<meta name="twitter:image" content="https://www.coloradomollybrown.com/./static/media/badge-logo.3071a041.png"/>

    </Helmet>
    {/* <Container> */}
    <AlertText/>
    <div>

      <Navbar collapseOnSelect className="navbar" expand="lg" bg="primary" variant="dark" sticky="top" style={{width: '100%', paddingTop:'5px',paddingLeft:'5px',paddingBottom:'1px'}}>
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
        <Nav.Link eventKey={0} as={Link} to="about" spy={true} smooth={true} offset={-400} duration={500}>About
        </Nav.Link>
        <Nav.Link eventKey={1} as={Link} to="roster" spy={true} smooth={true} offset={-400} duration={500}>Roster
        </Nav.Link>
        <Nav.Link eventKey={2} as={Link} to="schedule" spy={true} smooth={true} offset={-400} duration={500}>Schedule
        </Nav.Link>
        <Nav.Link eventKey={3} as={Link} to="sponsor" spy={true} smooth={true} offset={-500} duration={500}>Sponsors
        </Nav.Link>
        <Nav.Link eventKey={4} as={Link} to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact
        </Nav.Link>
        <Nav.Link eventKey={5} href="/blog">Blog
        </Nav.Link></Nav>
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
  </div>)
};
}

export default App;
