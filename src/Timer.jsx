import React, { Component } from 'react';
import { render } from 'react-dom';
import Datetime from 'react-datetime';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      time: new Date()
    };
  }

changeDateTime = (e) => {
  this.setState({ date: e });
}

changeTime = (e) => {
  this.setState({ time: e });
}

render() {
    console.log(this.state.date);
    return (
      <div>
          <Datetime  
            value = {this.state.date} 
            onChange = {this.changeDateTime}
            closeOnSelect
            dateFormat="DD-MM-YYYY"
          />
      </div>
    );
  }
}

render(<Timer />, document.getElementById('timer'));
