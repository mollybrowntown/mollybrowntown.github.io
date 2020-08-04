import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swipeable } from 'react-swipeable';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1-min.jpg'
import banner2 from '../assets/banner2-min.jpg'
import banner3 from '../assets/banner3-min.jpg'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class Main extends Component{
  // constructor() {
    // super(props);
        // this.carouselRef = React.createRef(); };

    // render() {
    // onSwipedLeft: () => { this.carouselRef.current.next(); }
  // constructor(props){
  //   super(props);
  //   // this.state = {activeTab: 0,demo:''}
  //   this.ControlledCarousel = this.ControlledCarousel.bind(this);
  // }
  // ControlledCarousel() {
  //
  // }
  // const [index, setIndex] = useState(0);
  //
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // onSwipedLeft: () => { this.carouselRef.current.next(); }
  render(){

    return(
      <div className="main-photos" >
        {/* <Container fluid="fluid" className="main-grid">
          <Row>
            <Col> */}
            {/* <div> */}

      <Carousel ref={this.carouselRef} interval={20000} slide={true} touch={true} pause={false}>
  <Carousel.Item>
    {/* <div className="carousel-header" style={{position:'fixed',top:'200px'}}><h1>Molly</h1></div> */}
    <img
      className="d-block w-100"
      src={banner1}
      alt="team pic 1"
    />

      <BrowserView>
        <Carousel.Caption style={{backgroundColor: '#373B44',opacity:'0.8',borderRadius: '10px'}}>
      <h1 style={{}}>MOLLY BROWN ULTIMATE</h1>
      </Carousel.Caption>
    </BrowserView>
  <MobileView>
    <Carousel.Caption style={{backgroundColor: 'rgba(55,59,68,0.4)',opacity:'1',borderRadius: '10px',top: '50%',transform: 'translateY(-50%)'}}>
    <h3 style={{}}>MOLLY BROWN ULTIMATE</h3>
    </Carousel.Caption>
  </MobileView>
      {/* <p>Team sit circle.</p> */}

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="team pic 2"
    />

    {/* <Carousel.Caption>
      <h1>SMOLLY BROWN ULTIMATE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="team pic 3"
    />

    {/* <Carousel.Caption>
      <h1>MOLLY BROWN ULTIMATE</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

</div>
    )
  }

}

export default Main;
