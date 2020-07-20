import React, {Component} from 'react';
import { Element } from 'react-scroll';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import History from './history.js';
import HistoryMob from './historymob.js';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class Schedule extends Component{
  constructor(props){
    super(props);
    this.state = {activeTab: "current"}
  }

toggleTabs(){
  if(this.state.activeTab === "current"){
        return(
//           <Card.Body>
//     <Card.Text>
//       <ListGroup variant="flush">
//   <ListGroup.Item action href="https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2019/schedule/Women/Club-Women/" active>
//   USA Ultimate Club Nationals | <b>T-5th</b> | San Diego, CA | October 24th-27th
// </ListGroup.Item>
// <ListGroup.Item action href="https://play.usaultimate.org/events/South-Central-Club-Womens-Regional-Championship-2019/">
// USA Ultimate South Central Club Regionals | <b>1st</b> | Tulsa, OK | September 21st-22nd
// </ListGroup.Item>
//   <ListGroup.Item action href="https://play.usaultimate.org/events/TCT-Pro-Championships-2019/schedule/Women/Club-Women/">
//   TCT Pro Championships | <b>2nd</b> | Philadelphia, PA | August 31st-September 2nd
// </ListGroup.Item>
//   <ListGroup.Item action href="https://play.usaultimate.org/events/2019-US-Open-Club-Championship/schedule/Women/Club-Women/">
//     US Open Club Championships | <b>7th</b> | Blaine, MN | August 2nd-4th
//   </ListGroup.Item>
//   <ListGroup.Item action href="https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2019/schedule/Women/Club-Women/">
//     Pro-Elite Challenge (Colorado Cup)| <b>2nd</b> | Aurora, CO | July 13th-14th
//   </ListGroup.Item>
//   <ListGroup.Item action href="https://play.usaultimate.org/events/Fort-Collins-Summer-Solstice-2019/schedule/Women/Club-Women/">
//     Fort Collins Summer Solstice | <b>1st</b> | Fort Collins, CO | June 22nd-23rd
//   </ListGroup.Item>
// </ListGroup>
// <br/><i>Click tournament for full Score Reporter results</i>
//     </Card.Text>
//     </Card.Body>
        <Card.Body>
          <Card.Text>
            <br/><i>The 2020 Club Season has officially been cancelled by USAU.</i>
          </Card.Text>
        </Card.Body>
        )
      }else{
        return(
          <Card.Body>
    {/* <Card.Title>fart</Card.Title> */}
  <History/>
    </Card.Body>
        )
      }
  }
  toggleTabsMob(){
    if(this.state.activeTab === "current"){
          return(
  //           <Card.Body>
  //     <Card.Text>
  //       <ListGroup variant="flush">
  //   <ListGroup.Item action href="https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2019/schedule/Women/Club-Women/" active>
  //   <b>USA Ultimate Club Nationals- T-5th</b> <br/> San Diego, CA <br/> October 24th-27th
  // </ListGroup.Item>
  // <ListGroup.Item action href="https://play.usaultimate.org/events/South-Central-Club-Womens-Regional-Championship-2019/">
  // <b>USA Ultimate South Central Club Regionals- 1st</b> <br/> Tulsa, OK <br/> September 21st-22nd
  // </ListGroup.Item>
  //   <ListGroup.Item action href="https://play.usaultimate.org/events/TCT-Pro-Championships-2019/schedule/Women/Club-Women/">
  //   <b>TCT Pro Championships- 2nd</b> <br/> Philadelphia, PA <br/> August 31st-September 2nd
  // </ListGroup.Item>
  //   <ListGroup.Item action href="https://play.usaultimate.org/events/2019-US-Open-Club-Championship/schedule/Women/Club-Women/">
  //     <b>US Open Club Championships- 7th</b> <br/> Blaine, MN <br/> August 2nd-4th
  //   </ListGroup.Item>
  //   <ListGroup.Item action href="https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2019/schedule/Women/Club-Women/">
  //     <b>Pro-Elite Challenge (Colorado Cup)- 2nd</b> <br/> Aurora, CO <br/> July 13th-14th
  //   </ListGroup.Item>
  //   <ListGroup.Item action href="https://play.usaultimate.org/events/Fort-Collins-Summer-Solstice-2019/schedule/Women/Club-Women/">
  //     <b>Fort Collins Summer Solstice- 1st</b> <br/> Fort Collins, CO <br/> June 22nd-23rd
  //   </ListGroup.Item>
  // </ListGroup>
  // <br/><i>Click tournament for full Score Reporter results</i>
  //     </Card.Text>
  //     </Card.Body>
  <Card.Body>
    <Card.Text>
      <br/><i>The 2020 Club Season has officially been cancelled by USAU after we had withdrawn from the season.</i>
    </Card.Text>
  </Card.Body>
          )
        }else{
          return(
            <Card.Body>
      {/* <Card.Title>fart</Card.Title> */}
    <HistoryMob/>
      </Card.Body>
          )
        }
    }
render(){
  return(
    <Element id="schedule" name="schedule">
    <div className="schedule">
      <BrowserView>
      <h1 className="schedule-header">2020 Schedule</h1><hr/>

      <Card className="schedule-grid">
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="current" onSelect={(eventKey) => this.setState({activeTab: eventKey})}>
          <Nav.Item>
            <Nav.Link eventKey="current">2020 Season</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="history">History</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {this.toggleTabs()}

</Card>
<hr/>
    </BrowserView>
    <MobileView>
    <h3 className="schedule-header">2020 Schedule</h3><hr/>
    <Card className="schedule-grid">
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey="current" onSelect={(eventKey) => this.setState({activeTab: eventKey})}>
        <Nav.Item>
          <Nav.Link eventKey="current">2020 Season</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="history">History</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    {this.toggleTabsMob()}
  </Card>
  <hr/>
  </MobileView>
    </div>
  </Element>
  )
}

};

export default Schedule;
