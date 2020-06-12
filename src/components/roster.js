import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Element } from 'react-scroll';
// import { Text, StyleSheet } from "react-native";
import data from "./data";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class Roster extends Component{
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
    // data.current.map((rost,i) => {
    //       return(
    //         if(rost.birthday){
    //           <p>ok</p>
    //         }
    //       )
    //if()
// return(
//     <div>{data.current.map((rost,i) => {
//           return(
//
//           )
//         })
//       }
//     </div>
//   )
  }
render(){
  return(
    <Element id='roster' name='roster'>
      <div className="roster">
    <BrowserView>
      <h1 className="roster-header">2019 Roster</h1><hr/>
    <div className="roster-grid">{data.current.map((rost,i) => {
      if(rost.nickname == ""){
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
    </Card.Body>
    </Card>

)
}

})
}
</div>
<hr/><div className="roster-footer">
  <p>Practice Player: Akane Kleinkopf</p>
  <p>* denotes captain</p>
</div>
</BrowserView>
<MobileView>
  <h3 className="roster-header">2019 Roster</h3><hr/>
  <div className="roster-grid-mob">{data.currentList.map((rost,i) => {
    if(rost.role != ""){
    return(
    <p className="roster-mob"><b>{rost.name}</b>{" ("+rost.role+")"}</p>
  )}else{
    return(
    <p className="roster-mob"><b>{rost.name}</b></p>
  )
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
