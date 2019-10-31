import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inc from './Inc';
import Display from './Display';


class App extends React.Component {

  state = {
    count: 0
  };

  addState = () => {
    let newCount = this.state.count + 1;
    if (this.state.count === 5) {
      return;
    }
    this.setState({
      count: newCount
    });
  }

  resetState = () => {
    this.setState({
      count: 0
    });
  }



  render = () => {
    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Inc state={this.state} />
          <Display addState={this.addState} resetState={this.resetState} state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
