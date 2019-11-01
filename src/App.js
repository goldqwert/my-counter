import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Display from './Display';
import SettingsDisplay from './SettingsDisplay';
import SettingsButtons from './SettingsButtons';


class App extends React.Component {

  state = {
    count: 0,
    maxValue: 0,
    minValue: 0
  };

  incCount = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  resetState = () => {
    this.setState({
      count: 0
    });
  }

  addMaxValue = (maxValue) => {
    this.setState({
      maxValue: Number(maxValue)
    })
  }

  addMinValue = (minValue) => {
    this.setState({
      minValue: Number(minValue)
    })
  }


  changeValueNumbers = () => {
    this.setState({
      count: this.state.minValue
    })

  }

  render = () => {
    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Display state={this.state} />
          <Buttons incCount={this.incCount} resetState={this.resetState} count={this.state.count} maxValue={this.state.maxValue} />
        </div>
        <div className='counter_settings'>
          <SettingsDisplay maxValue={this.state.maxValue} minValue={this.state.minValue} addMaxValue={this.addMaxValue} addMinValue={this.addMinValue} />
          <SettingsButtons changeValueNumbers={this.changeValueNumbers} />
        </div>
      </div>
    );
  }
}

export default App;
