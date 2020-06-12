import React, {Component} from 'react';
import { Element } from 'react-scroll';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class About extends Component{
render(){
  return(
    <Element id="about" name="about">
    <div className="about">
      <BrowserView>
      <h1 className="about-header">About the Team</h1><hr/>
    </BrowserView>
    <MobileView>
    <h3 className="about-header">About the Team</h3><hr/>
  </MobileView>
    </div>
  </Element>
  )
}

};

export default About;
