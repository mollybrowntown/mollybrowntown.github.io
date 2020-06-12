import React, {Component} from 'react';
import { Element } from 'react-scroll';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class Contact extends Component{
render(){
  return(
    <Element id="contact" name="contact">
    <div className="contact">
      <BrowserView>
      <h1 className="contact-header">Contact Us</h1><hr/>
    </BrowserView>
    <MobileView>
    <h3 className="contact-header">Contact Us</h3><hr/>
  </MobileView>
      <div className="contact-email">
        <a href="mailto:mollybrownultimate@gmail.com">
        <i class="far fa-envelope"></i>
        <span>mollybrownultimate@gmail.com</span><br/>
      </a>
      </div>
      <div className="contact-socials">
        <a href="https://www.facebook.com/MollyBrownTown/">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/mollybrownultimate/">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com/mollybrowntown">
        <i class="fab fa-twitter"></i>
      </a>
      </div>
      <hr/>

    </div>
  </Element>
  )
}

};

export default Contact;
