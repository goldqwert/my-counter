import React from 'react';
import './App.css';
import Display from './Display';
import SettingsDisplay from './SettingsDisplay';
import Button from './Button';


class App extends React.Component {

  state = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    resetDisabled: false,
    incDisabled: false,
    setDisabled: false,
    numbersOnChange: false,
    inCorrectValue: false
  };

  incCount = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    }, () => {
      if (this.state.count === this.state.maxValue) {
        this.setState({
          incDisabled: true
        });
      };
    });
  }

  resetCount = () => {
    this.setState({
      count: 0,
      incDisabled: false
    });
  }

  addMaxValue = (maxValue) => {
    this.setState({
      maxValue: Number(maxValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true
    })
  }

  addMinValue = (minValue) => {
    this.setState({
      minValue: Number(minValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true
    })
  }


  changeValueNumbers = () => {
    this.setState({
      count: this.state.minValue,
      setDisabled: true,
      incDisabled: false,
      resetDisabled: false,
      numbersOnChange: false
    })

  }

  render = () => {
    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Display state={this.state}
            numbersOnChange={this.state.numbersOnChange} />
          <Button
            title='INC'
            callback={this.incCount}
            disabled={this.state.incDisabled}
          />
          <Button
            title='RESET'
            callback={this.resetCount}
            disabled={this.state.resetDisabled}
          />
        </div>
        <div className='counter_settings'>
          <SettingsDisplay maxValue={this.state.maxValue}
            minValue={this.state.minValue}
            addMaxValue={this.addMaxValue}
            addMinValue={this.addMinValue} />
          <Button title='SET'
            callback={this.changeValueNumbers}
            disabled={this.state.setDisabled} />
        </div>
      </div>
    );
  }
}

export default App;
