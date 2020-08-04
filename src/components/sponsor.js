import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Element } from 'react-scroll';
// import tsport from '../../public/images/Thinksport.png'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Sponsor extends Component{
render(){
  return(
    <Element id="sponsor" name="sponsor">
      <div className="sponsor">
        <BrowserView>
    <h1 className="sponsor-header">Thank You to Our Sponsors</h1><hr/>
  </BrowserView>
  <MobileView>
<h3 className="sponsor-header">Thank You to Our Sponsors</h3><hr/>
</MobileView>
    <Container className="sponsor-grid">
      {/* <Row> */}
      <a href="https://www.clifbar.com/" style={{display:'inline-block'}}>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Clifbarlogo.svg/1200px-Clifbarlogo.svg.png" style={{alignSelf:'flex-start', width:'100%'}} alt="clif-bar-logo" onClick="window.location='https://www.facebook.com/pages/Gr81'"></img></a>
    {/*}<a href="https://www.crocs.com/" style={{display:'inline-block'}}>
    <img src="https://assets.simon.com/tenantlogos/14748.png" style={{alignSelf:'flex-start', width:'100%'}} alt="crocs-logo"></img></a>*/}
    <a href="https://glitterevolution.com/" style={{display:'inline-block'}}>
    <img src="https://www.discoverbioglitter.com/wp-content/uploads/glitterrevolution.jpg" style={{alignSelf:'flex-start', width:'100%'}} alt="eco-glitter-logo"></img></a>
    <a href="https://gothink.com/" style={{display:'inline-block'}}>
    <img src="./images/Thinksport.png" style={{alignSelf:'flex-start'}} alt="think-sport-logo" style={{alignSelf:'flex-start', width:'100%'}}></img></a>
    <a href="https://www.tigerbalm.com/us/" style={{display:'inline-block'}}>
    <img src="https://mms.businesswire.com/media/20150630006653/en/416611/4/Tiger-Balm-Logo.jpg" style={{alignSelf:'flex-start', width:'100%'}} alt="tiger-balm-logo"></img></a>

  {/* </Row> */}

  </Container>
  <hr/>
  </div>
  </Element>
  )
}

};

export default Sponsor;
