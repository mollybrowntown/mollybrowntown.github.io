import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Element } from 'react-scroll';
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
    <a href="https://www.crocs.com/" style={{display:'inline-block'}}>
    <img src="https://assets.simon.com/tenantlogos/14748.png" style={{alignSelf:'flex-start', width:'100%'}} alt="crocs-logo"></img></a>
    <a href="https://glitterevolution.com/" style={{display:'inline-block'}}>
    <img src="https://www.discoverbioglitter.com/wp-content/uploads/glitterrevolution.jpg" style={{alignSelf:'flex-start', width:'100%'}} alt="eco-glitter-logo"></img></a>
    <a href="https://gothink.com/" style={{display:'inline-block'}}>
    <img src="data:image/png;base64,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" style={{alignSelf:'flex-start'}} alt="think-sport-logo" style={{alignSelf:'flex-start', width:'100%'}}></img></a>
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
