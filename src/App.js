import React from 'react';
import './App.css';
import Display from './Display';
import SettingsDisplay from './SettingsDisplay';
import Button from './Button';


class App extends React.Component {

  state = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    resetDisabled: false,
    incDisabled: false,
    setDisabled: false,
    numbersOnChange: false,
    inCorrectValue: false
  };

  incCount = () => {
    if (this.state.count < this.state.maxValue) {
      this.setState({
        count: this.state.count + 1
      }, () => {
        if (this.state.count === this.state.maxValue) {
          this.setState({
            incDisabled: true
          });
        }
      })
      this.saveState();
    }
  }

  resetCount = () => {
    this.setState({
      count: this.state.startValue,
      incDisabled: false
    });
    this.saveState();
  }

  changeMaxValue = (maxValue) => {
    this.setState({
      maxValue: Number(maxValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true,
      count: 'enter value and press \'set\''
    }, () => {
      if (this.state.maxValue < 0) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.startValue < 0) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.startValue > this.state.maxValue) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.maxValue === this.state.startValue) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
    })
    this.saveState();
  }

  changeStartValue = (startValue) => {
    this.setState({
      startValue: Number(startValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true,
      count: 'enter value and press \'set\''
    }, () => {
      if (this.state.startValue < 0) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.maxValue < 0) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.startValue > this.state.maxValue) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
      if (this.state.maxValue === this.state.startValue) {
        this.setState({
          setDisabled: true,
          count: 'incorrect number!'
        })
      }
    })
    this.saveState();
  }


  onSetValue = () => {
    this.setState({
      count: this.state.startValue,
      setDisabled: true,
      incDisabled: false,
      resetDisabled: false,
      numbersOnChange: false
    })
    this.saveState();
  }

  saveState = () => {
    let stateAsString = JSON.stringify(this.state)
    localStorage.setItem('our-state', stateAsString);
  }

  restoreState = () => {
    let state = {
      count: 0,
      maxValue: 5,
      startValue: 0,
      resetDisabled: false,
      incDisabled: false,
      setDisabled: false,
      numbersOnChange: false,
      inCorrectValue: false
    };


    let stateAsString = localStorage.getItem('our-state');

    if (stateAsString != null) {
      state = JSON.parse(stateAsString);
    }

    this.setState(state);
  }

  componentDidMount() {
    this.restoreState();
  }

  render = () => {
    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Display state={this.state}
            numbersOnChange={this.state.numbersOnChange} />
          <div className='counter_buttons'>
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
        </div>
        <div className='counter_settings'>
          <SettingsDisplay maxValue={this.state.maxValue}
            startValue={this.state.startValue}
            changeMaxValue={this.changeMaxValue}
            count={this.state.count}
            changeStartValue={this.changeStartValue} />
          <Button title='SET'
            callback={this.onSetValue}
            disabled={this.state.setDisabled} />
        </div>
      </div>
    );
  }
}

export default App;
