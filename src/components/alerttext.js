import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
class AlertText extends Component{
  // const [show, setShow] = React.useState(true);
  constructor(props){
    super(props);
    this.state = {show: true}
    this.AlertDismissibleExample = this.AlertDismissibleExample.bind(this);
  }
  AlertDismissibleExample() {
 const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p>
          Due to the global COVID-19 pandemic, we have decided to not participate in any competitive events this season for the safety of our players and our community. See <a href="https://www.coloradomollybrown.com/blog/posts/2020-06-10/update">full statement here.</a>
        </p>
      </Alert>
    );
  }else{
    return null;
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
render(){
  return(
    <div className="alert">
      {<this.AlertDismissibleExample/>}
    </div>
  )
}

};

export default AlertText;
