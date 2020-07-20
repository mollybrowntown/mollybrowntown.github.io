import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import data from "./data";
class History extends Component{
  constructor(props){
    super(props);
    // this.state = {show: true}
    this.rosterList = this.rosterList.bind(this);
  }
  // rosterList(year) {
  //   let list = year + 'List'
  //   console.log(list,data[list])
  //   data[list].map((player,i) => {
  //     console.log(player.name)
  //     if(player.role !== ""){
  //       return <li key={i}>{player.name}</li>
  //     }else {
  //       return <li key={i}>{player.name}</li>
  //     }
  //   })
  //
  // }
  rosterList(year) {
    let list = year + 'List'
    return (data[list].map((player,i) => {
      console.log(player.name)
      if(player.role !== ""){
        return <li key={i}>{player.name +" (" +player.role+")"}</li>
      }else {
        return <li key={i}>{player.name}</li>
      }
    })
  )

  }
render(){
  return(
    <Card.Text>
    <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                      2019 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-5th</b> | San Diego, CA | October 24th-27th<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Tulsa, OK | September 21st-22nd<br/>
                      TCT Pro Championships | <b>2nd</b> | Philadelphia, PA | August 31st-September 2nd<br/>
                      US Open Club Championships | <b>7th</b> | Blaine, MN | August 2nd-4th<br/>
                      Pro-Elite Challenge (Colorado Cup)| <b>2nd</b> | Aurora, CO | July 13th-14th<br/>
                      Fort Collins Summer Solstice | <b>1st</b> | Fort Collins, CO | June 22nd-23rd<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2019')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
    <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                      2018 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-3rd</b> | San Diego, CA | October 18th-21st<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Denver, CO | September 22nd-23rd<br/>
                      Bay Area Invite | <b>1st</b> | Palo Alto, CA | August 25th-26th<br/>
                      US Open Club Championships | <b>3rd</b> | Blaine, MN | August 3rd-5th<br/>
                      World Ultimate Club Championships | <b>T-3rd</b> | Cincinnati, OH | July 14th-21st<br/>
                      Pro-Elite Challenge (Colorado Cup) | <b>2nd</b> | Aurora, CO | July 7th-8th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2018')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                      2017 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-3rd</b> | Sarasota, FL | October 19th-22nd<br/>
                      USA Ultimate South Central Club Regionals | <b>2nd</b> | Beaumont, TX | September 23rd-24th<br/>
                      TCT Pro Championships | <b>T-3rd</b> | Burlington, WA | September 2nd-4th<br/>
                      US Open Club Championships | <b>2nd</b> | Blaine, MN | August 4th-6th<br/>
                      Eurostars Showcase Game | <b>W 15-12</b> | Aurora, CO | August 1st<br/>
                      Pro-Elite Challenge (Colorado Cup) | <b>3rd</b> | Aurora, CO | July 8th-9th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2017')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      2016 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-3rd</b> | Rockford, IL | September 29th-October 1st<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Tulsa, OK | September 10th-11th<br/>
                      TCT Pro Flight Finale | <b>4th</b> | Vancouver, WA | August 31st-September 2nd<br/>
                      Pro-Elite Challenge (Colorado Cup) | <b>3rd</b> | Aurora, CO | July 30th-31st<br/>
                      All-Star Ultimate Showcase Game | <b>W 16-14</b> | Aurora, CO | July 29th<br/>
                      US Open Club Championships | <b>T-3rd</b> | Providence, RI | July 1st-4th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2016')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>

                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      2015 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-5th</b> | Frisco, TX | October 24th-27th<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Tulsa, OK | September 12th-13th<br/>
                      TCT Pro Flight Finale | <b>4th</b> | Blaine, MN | August 22nd-23rd<br/>
                      Pro-Elite Challenge (Colorado Cup) | <b>1st</b> | Aurora, CO | August 1st-2nd<br/>
                      Small Batch vs. Molly Brown Showcase Game | <b>W 15-7</b> | Westminster, CO | July 22nd<br/>
                      Elite-Select Challenge (Oshadega Invite)| <b>1st</b> | Hilliard, OH | July 11th-12th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2015')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      2014 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>T-9th</b> | Frisco, TX | October 16th-19th<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Tulsa, OK | September 27th-28th<br/>
                      Heavyweights | <b>1st</b> | Rockford, IL | August 23rd-24th<br/>
                      Elite-Select Challenge (Colorado Cup) | <b>1st</b> | Aurora, CO | August 2nd-3rd<br/>
                      Pro-Elite Challenge (Chesapeake Invite) | <b>3rd</b> | Leesburd, VA | July 12th-13th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2014')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      2013 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>11th</b> | Frisco, TX | October 17th-20th<br/>
                      USA Ultimate South Central Club Regionals | <b>2nd</b> | Commerce City, CO | September 21st-22nd<br/>
                      Pro Flight Finale | <b>5th</b> | Davis, CA | August 31st-September 1st<br/>
                      Colorado Cup | <b>2nd</b> | Aurora, CO | August 10th-11th<br/>
                      Terminus | <b>7th</b> | East Point, GA | July 20th-21st<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2013')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      2012 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>5th</b> | Sarasota, FL | October 25th-28th<br/>
                      USA Ultimate South Central Club Regionals | <b>1st</b> | Round Rock, TX | September 29th-30th<br/>
                      USA Ultimate Rocky Mountain Club Sectionals | <b>1st</b> | Commerce City, CO | September 15th<br/>
                      Labor Day | <b>6th</b> | Santa Cruz, CA | September 1st-2nd<br/>
                      Colorado Cup | <b>2nd</b> | Boulder, CO | July 28th-29th<br/>
                      US Open Championships | <b>6th</b> | Aurora, CO | July 5th-8th<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2012')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      2011 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>7th</b> | Sarasota, FL | October 27th-30th<br/>
                      USA Ultimate Southwest Regionals | <b>1st</b> | Commerce City, CO | October 8th-9th<br/>
                      USA Ultimate Rocky Mountain Club Sectionals | <b>1st</b> | Commerce City, CO | September 25th<br/>
                      Virginia Fusion | <b>2nd</b> | Axton, VA | September 17th-18th<br/>
                      Labor Day | <b>3rd</b> | Santa Cruz, CA | September 3rd-4th<br/>
                      Colorado Cup | <b>5th</b> | Boulder, CO | July 30th-31st<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2011')}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
          <Accordion>
              <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      2010 Results/Roster
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      USA Ultimate Club Nationals | <b>9th</b> | Sarasota, FL | October 28th-31st<br/>
                      USA Ultimate Southwest Regionals | <b>1st</b> | Santa Barbara, CA | October 9th-10th<br/>
                      USA Ultimate Rocky Mountain Club Sectionals | <b>1st</b> | Commerce City, CO | September 12th<br/>
                      Virginia Fusion | <b>2nd</b> | Axton, VA | September 17th-18th<br/>
                      Labor Day | <b>9th</b> | Santa Cruz, CA | September 4th-5th<br/>
                      Colorado Cup | <b>1st</b> | Boulder, CO | July 31st-August 1st<br/>
                      <br/>Roster:<br/>
                      <ul>
                      {this.rosterList('2010')}
                      </ul>
                      <i>*Molly Brown is established this year</i>
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
          </Accordion>
        </Card.Text>
  )
}

};

export default History;
