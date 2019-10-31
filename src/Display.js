import React from 'react';
import logo from './logo.svg';
import './App.css';


class Display extends React.Component {



  addOne = () => {
    this.props.addState();
  }

  resetCount = () => {
    this.props.resetState();
  }



  render = () => {

    let disableInc = this.props.state.count === 5;

    return (
      <div className='counter_display'>
        <button className='counter_inc' onClick={this.addOne} disabled={disableInc}>INC</button>
        <button className='counter_reset' onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
export default Display;
