import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
// import CardDeck from 'react-bootstrap/CardDeck';
import { Element } from 'react-scroll';
import Button from 'react-bootstrap/Button';
// import { Text, StyleSheet } from "react-native";
import data from "./data";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Modal from 'react-bootstrap/Modal';
class Roster extends Component{
  constructor(props,context){
        super(props,context);
        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
        this.state = {
            show : false,
            name: "",
            image:"",
            years:"",
            pronoun:"",
            hometown:"",
            birthday: "",
            credit:""

        }
    }

    handleModalShowHide(name,image,years,pronoun,hometown,birthday,credit) {
      console.log(image)
        this.setState(
          { showHide: !this.state.showHide,
            name:name,
            image:image,
            years:years,
            pronoun:pronoun,
            hometown:hometown,
            birthday:birthday,
            credit:credit
          })
    }
    handleClose() {
		this.setState({ show: false });
	}

	handleShow(name,image,years,pronoun,hometown,birthday,credit) {
		this.setState(
      { show: true,
        name:name,
        image:image,
        years:years,
        pronoun:pronoun,
        hometown:hometown,
        birthday:birthday,
        credit:credit
      });
	}
  //   getInitialState(){
  //   return { showModal: false };
  // },
  //
  // close(){
  //   this.setState({ showModal: false });
  // },
  //
  // open(){
  //   this.setState({ showModal: true });
  // },
  // state = {
  //   card: []
  // };
  // componentDidMount() {
  //   fetch("http://localhost:3000/assets/roster.json")
  //     .then(response => response.json())
  //     .then(data => this.setState({card: data}));
  //
  // }
  // const rosterList = data.2019;

  nickname() {
    // console.log(data.current)
    data.current.map((rost,i) => {
      if(rost.birthday){
        console.log(rost.birthday)
      }
    })
    if(data.current.birthday){
      console.log(data.current.birthday)
      return(
        <p>ok</p>
      )
    }
  }

render(){
  const mod = this.state.modal;
  return(
    <Element id='roster' name='roster'>
      <div className="roster">
    <BrowserView>
      <h1 className="roster-header">2020 Roster</h1><hr/>
    <div className="roster-grid">{data.current.map((rost,i) => {
      let birth = new Date(rost.birthday)
      let birthdayToday = String(birth.getMonth())+ '/'+String(birth.getDate()) === String(new Date().getMonth())+'/'+String(new Date().getDate()) ? true : false
      if(rost.nickname === ""){

        if (birthdayToday){
          return(

    <Card key={i} shadow={5} style={{maxWidth:'1000%'}}>
      <Card.Header>{rost.name} &nbsp; <i class="fa fa-birthday-cake" aria-hidden="true"></i></Card.Header>
      <Card.Img variant="top" style={{color:'#fff', height:'350px', background:"url("+rost.image+")center /cover"}}/>
      <Card.Body>
      <Card.Text style={{fontSize:'14px'}}>
        <span><b>Years with MB:</b> {rost.years}</span><br></br>
        <span><b>Pronouns:</b> {rost.pronoun}</span><br></br>
        <span><b>Hometown:</b> {rost.hometown}</span><br></br>
        <span><b>Birthday:</b> {rost.birthdayLong}</span><br></br>
        <br></br>
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Photo by: {rost.credit}</small>
      </Card.Text>
    </Card.Body>
    </Card>

  )
        }else{
          return(

    <Card key={i} shadow={5} style={{maxWidth:'1000%'}}>
      <Card.Header>{rost.name}</Card.Header>
      <Card.Img variant="top" style={{color:'#fff', height:'350px', background:"url("+rost.image+")center /cover"}}/>
      <Card.Body>
      <Card.Text style={{fontSize:'14px'}}>
        <span><b>Years with MB:</b> {rost.years}</span><br></br>
        <span><b>Pronouns:</b> {rost.pronoun}</span><br></br>
        <span><b>Hometown:</b> {rost.hometown}</span><br></br>
        <span><b>Birthday:</b> {rost.birthdayLong}</span><br></br>
        <br></br>
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Photo by: {rost.credit}</small>
      </Card.Text>
    </Card.Body>
    </Card>

  )
}
}else{

    if (birthdayToday){
      return(

<Card key={i} shadow={5} style={{maxWidth:'1000%'}}>
  <Card.Header>{rost.name} &nbsp; <i class="fa fa-birthday-cake" aria-hidden="true"></i></Card.Header>
  <Card.Img variant="top" style={{color:'#fff', height:'350px', background:"url("+rost.image+")center /cover"}}/>
  <Card.Body>
  <Card.Text style={{fontSize:'14px'}}>
    <span><b>Years with MB:</b> {rost.years}</span><br></br>
    <span><b>Pronouns:</b> {rost.pronoun}</span><br></br>
    <span><b>Hometown:</b> {rost.hometown}</span><br></br>
    <span><b>Birthday:</b> {rost.birthdayLong}</span><br></br>
    <br></br>
  </Card.Text>
  <Card.Text>
    <small className="text-muted">Photo by: {rost.credit}</small>
  </Card.Text>
</Card.Body>
</Card>

)
    }else{
      return(
    <Card key={i} shadow={5} style={{height:"100%",maxWidth:'100%'}}>
      <Card.Header>{rost.name}</Card.Header>
    <Card.Img variant="top" style={{color:'#fff', height:'350px', background:"url("+rost.image+")center /cover"}}/>
    <Card.Body>
    <Card.Text style={{fontSize:'14px'}}>
    <span><b>Nickname:</b> {rost.nickname}</span><br></br>
    <span><b>Years with MB:</b> {rost.years}</span><br></br>
    <span><b>Pronouns:</b> {rost.pronoun}</span><br></br>
    <span><b>Hometown:</b> {rost.hometown}</span><br></br>
    <span><b>Birthday:</b> {rost.birthdayLong}</span><br></br>
    </Card.Text>
    <Card.Text>
      <small className="text-muted">Photo by: {rost.credit}</small>
    </Card.Text>
    </Card.Body>
    </Card>
  )
  }


}


})
}
</div>
<hr/><div className="roster-footer">
  <p>* denotes captain</p>
</div>
</BrowserView>
<MobileView>
  <h3 className="roster-header">2020 Roster</h3><hr/>
  <div className="roster-grid-mob">{data.current.map((rost,i) => {
    let birth = new Date(rost.birthday)
    let birthdayToday = String(birth.getMonth())+ '/'+String(birth.getDate()) === String(new Date().getMonth())+'/'+String(new Date().getDate()) ? true : false
    if(rost.role !== ""){
      if(birthdayToday){
        return(
          <div>
        <p className="roster-mob" onClick={()=>this.handleShow(rost.name,rost.image,rost.years,rost.pronoun,rost.hometown,rost.birthdayLong,rost.credit)}><b>{rost.fullName}</b>{" ("+rost.role+")"}&nbsp; <i class="fa fa-birthday-cake" aria-hidden="true"></i></p>
        <Modal style={{ height: "100vh" }} dialogClassName="custom-modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
     <Modal.Header closeButton onClick={this.handleClose}>
     <Modal.Title>{this.state.name}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <img src={this.state.image} class="img-fluid"/>
     <span><b>Years with MB:</b> {this.state.years}</span><br></br>
     <span><b>Pronouns:</b> {this.state.pronoun}</span><br></br>
     <span><b>Hometown:</b> {this.state.hometown}</span><br></br>
     <span><b>Birthday:</b> {this.state.birthday}</span><br></br>
     <small className="text-muted">Photo by: {this.state.credit}</small>
     </Modal.Body>
     <Modal.Footer>
     <Button variant="secondary" onClick={this.handleClose}>
         Close
     </Button>

     </Modal.Footer>
 </Modal>
        </div>
      )
      }else{
        return(
          <div>
        <p className="roster-mob" onClick={()=>this.handleShow(rost.name,rost.image,rost.years,rost.pronoun,rost.hometown,rost.birthdayLong,rost.credit)}><b>{rost.fullName}</b>{" ("+rost.role+")"}</p>


                       <Modal style={{ height: "100vh" }} dialogClassName="custom-modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton onClick={this.handleClose}>
                    <Modal.Title>{this.state.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img src={this.state.image} class="img-fluid"/>
                    <span><b>Years with MB:</b> {this.state.years}</span><br></br>
                    <span><b>Pronouns:</b> {this.state.pronoun}</span><br></br>
                    <span><b>Hometown:</b> {this.state.hometown}</span><br></br>
                    <span><b>Birthday:</b> {this.state.birthday}</span><br></br>
                    <small className="text-muted">Photo by: {this.state.credit}</small>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>

                    </Modal.Footer>
                </Modal>
        </div>



      )
      }

}else{
  if(birthdayToday){
    return(
      <div>
    <p className="roster-mob" onClick={()=>this.handleShow(rost.name,rost.image,rost.years,rost.pronoun,rost.hometown,rost.birthdayLong,rost.credit)}><b>{rost.fullName}&nbsp; <i class="fa fa-birthday-cake" aria-hidden="true"></i></b></p>
    <Modal style={{ height: "100vh" }} dialogClassName="custom-modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
 <Modal.Header closeButton onClick={this.handleClose}>
 <Modal.Title>{this.state.name}</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <img src={this.state.image} class="img-fluid"/>
 <span><b>Years with MB:</b> {this.state.years}</span><br></br>
 <span><b>Pronouns:</b> {this.state.pronoun}</span><br></br>
 <span><b>Hometown:</b> {this.state.hometown}</span><br></br>
 <span><b>Birthday:</b> {this.state.birthday}</span><br></br>
 <small className="text-muted">Photo by: {this.state.credit}</small>
 </Modal.Body>
 <Modal.Footer>
 <Button variant="secondary" onClick={this.handleClose}>
     Close
 </Button>

 </Modal.Footer>
</Modal>
</div>
  )
  }
  else{
    return(
      <div>
    <p className="roster-mob" onClick={() => this.handleShow(rost.name,rost.image,rost.years,rost.pronoun,rost.hometown,rost.birthdayLong,rost.credit)}><b>{rost.fullName}</b></p>
    <Modal style={{ height: "100vh" }} dialogClassName="custom-modal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
 <Modal.Header closeButton onClick={this.handleClose}>
 <Modal.Title>{this.state.name}</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <img src={this.state.image} class="img-fluid"/>
 <span><b>Years with MB:</b> {this.state.years}</span><br></br>
 <span><b>Pronouns:</b> {this.state.pronoun}</span><br></br>
 <span><b>Hometown:</b> {this.state.hometown}</span><br></br>
 <span><b>Birthday:</b> {this.state.birthday}</span><br></br>
 <small className="text-muted">Photo by: {this.state.credit}</small>
 </Modal.Body>
 <Modal.Footer>
 <Button variant="secondary" onClick={this.handleClose}>
     Close
 </Button>

 </Modal.Footer>
</Modal>
    </div>
  )
  }

  }
  })}
</div>
<hr/>
</MobileView>

  </div>
</Element>
  )
}

}
export default Roster;
