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
      <p className="about-content">
        Molly Brown was founded in 2010, and is named in tribute to 20th century Colorado suffragette and Titanic survivor Margaret “Molly” Brown (“The Unsinkable Molly Brown”). The team Molly Brown was born from a combination of previous women’s teams in the Boulder/Denver area, including Rare Air and Box. Two of the MB originals, Anna Schott and Anne “Pogo” Pogoriler, developed this name through inspiration from Molly Brown’s philanthropy, volunteerism, and work in improvement of women's lives by continuing education in Colorado. In the spirit of the original Molly Brown's activism, the team has also become known for its activism off the field, both locally and nationally, by supporting women’s and youth participation and development in ultimate.
<br></br><br></br>
Update for the 2020 season: Due to the impact of COVID-19 and uncertainty surrounding the post-season, Molly Brown has opted to forego playing in any tournaments should they occur, and instead will be donating at least $30,000 that would have been spent this season to local BIPOC activists and organizations.

      </p>
    </BrowserView>
    <MobileView>
    <h3 className="about-header">About the Team</h3><hr/>
    <p className="about-content">
      Molly Brown was founded in 2010, and is named in tribute to 20th century Colorado suffragette and Titanic survivor Margaret “Molly” Brown (“The Unsinkable Molly Brown”). The team Molly Brown was born from a combination of previous women’s teams in the Boulder/Denver area, including Rare Air and Box. Two of the MB originals, Anna Schott and Anne “Pogo” Pogoriler, developed this name through inspiration from Molly Brown’s philanthropy, volunteerism, and work in improvement of women's lives by continuing education in Colorado. In the spirit of the original Molly Brown's activism, the team has also become known for its activism off the field, both locally and nationally, by supporting women’s and youth participation and development in ultimate.
<br></br><br></br>
Update for the 2020 season: Due to the impact of COVID-19 and uncertainty surrounding the post-season, Molly Brown has opted to forego playing in any tournaments should they occur, and instead will be donating at least $30,000 that would have been spent this season to local BIPOC activists and organizations.

    </p>
  </MobileView>
    </div>
  </Element>
  )
}

};

export default About;
