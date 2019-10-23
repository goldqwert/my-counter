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
      <div className='display'>
        <button onClick={this.resetCount} >Reset</button>
        <button onClick={this.addOne} disabled={disableInc}>i++</button>
      </div>
    );
  }
}
export default Display;
