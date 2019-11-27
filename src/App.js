import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import Settings from './components/Settings/Setting';
import Button from './components/Buttons/Button';
import { connect } from 'react-redux';
import { incCount, resetCount, setCount, changeMaxValue, changeStartValue } from './redux/reducer'

class App extends React.Component {

  render = () => {

    debugger
    let isIncBtnDisabled = this.props.count >= this.props.maxValue || this.props.incorrectValue || !this.props.isValuesSet ? true : false
    let isResetBtnDisabled = this.props.incorrectValue || !this.props.isValuesSet ? true : false
    let isSetBtnDisabled = this.props.isValuesSet || this.props.incorrectValue ? true : false

    return (
      <div className='container'>
        <div className='counter_wrapper'>
          <Display count={this.props.count}
            maxValue={this.props.maxValue}
            isValuesSet={this.props.isValuesSet}
            incorrectValue={this.props.incorrectValue}
          />
          <div className='counter_buttons'>
            <Button
              title='INC'
              callback={this.props.incCount}
              disabled={isIncBtnDisabled}
            />
            <Button
              title='RESET'
              callback={this.props.resetCount}
              disabled={isResetBtnDisabled}
            />
          </div>
        </div>
        <div className='counter_settings'>
          <Settings maxValue={this.props.maxValue}
            startValue={this.props.startValue}
            changeMaxValue={this.props.changeMaxValue}
            changeStartValue={this.props.changeStartValue}
            incorrectValue={this.props.incorrectValue} />

          <Button title='SET'
            callback={this.props.setCount}
            disabled={isSetBtnDisabled} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    maxValue: state.maxValue,
    startValue: state.startValue,
    // resetDisabled: state.resetDisabled,
    // incDisabled: state.incDisabled,
    // setDisabled: state.setDisabled,
    incorrectValue: state.incorrectValue,
    isValuesSet: state.isValuesSet

  }
}


const ConnectedApp = connect(mapStateToProps, { incCount, resetCount, setCount, changeStartValue, changeMaxValue })(App)
export default ConnectedApp;