import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import Settings from './components/Settings/Setting';
import Button from './components/Buttons/Button';

class App extends React.Component {

  componentDidMount() {
    this.restoreState();
  }

  state = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    resetDisabled: false,
    incDisabled: false,
    setDisabled: false,
    incorrectValue: false,
    isValuesSet: false

  };

  incCount = () => {
    if (this.state.count < this.state.maxValue) {
      this.setState({
        count: this.state.count + 1
      }, () => {
        this.changeIncDisabled();
        this.saveState();
      })
    }
  }

  changeIncDisabled = () => {
    if (this.state.count === this.state.maxValue) {
      this.setState({
        incDisabled: true
      });
    }
  }

  resetCount = () => {
    this.setState({
      count: this.state.startValue,
      incDisabled: false
    }, () => {
      this.saveState();
    });
  }

  changeMaxValue = (maxValue) => {
    this.setState({
      maxValue: Number(maxValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      isValuesSet: false
    }, () => {
      this.changeSetDisabled()
      this.saveState();
    })
  }

  changeStartValue = (startValue) => {
    this.setState({
      startValue: Number(startValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      isValuesSet: false
    }, () => {
      this.changeSetDisabled()
      this.saveState();
    })
  }

  changeSetDisabled = () => {
    if (this.state.maxValue < 0 || this.state.startValue < 0 || this.state.startValue >= this.state.maxValue) {
      this.setState({
        setDisabled: true,
        incorrectValue: true
      })
    } else if (this.state.maxValue > this.state.startValue) {
      this.setState({
        incorrectValue: false
      })
    }
  }

  setValue = () => {
    this.setState({
      count: this.state.startValue,
      setDisabled: true,
      incDisabled: false,
      resetDisabled: false,
      isValuesSet: true
    }, () => {
      this.saveState();
    })
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
      incorrectValue: false,
      isValuesSet: false
    };

    let stateAsString = localStorage.getItem('our-state');

    if (stateAsString != null) {
      state = JSON.parse(stateAsString);
    }
    this.setState(state);
  }

  render = () => {
    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Display state={this.state}
          />
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
          <Settings maxValue={this.state.maxValue}
            startValue={this.state.startValue}
            changeMaxValue={this.changeMaxValue}
            changeStartValue={this.changeStartValue}
            incorrectValue={this.state.incorrectValue} />

          <Button title='SET'
            callback={this.setValue}
            disabled={this.state.setDisabled} />
        </div>
      </div>
    );
  }
}

export default App;
