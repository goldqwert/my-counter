import React from 'react';
import './App.css';


const SettingsDisplay = (props) => {

  const onChangeMaxValue = (e) => {
    let maxValue = e.currentTarget.value;
    props.changeMaxValue(maxValue);
  }

  const onChangeStartValue = (e) => {
    let startValue = e.currentTarget.value;
    props.changeStartValue(startValue)

  }

  let classForInput = props.count === 'incorrect number!' ? 'settings_error' : 'settings_inputs';


  return (
    <div className='settings_display'>
      MAX VALUE: <input onChange={onChangeMaxValue} value={props.maxValue} className={classForInput} type='number' max='99' min='-99' />
      START VALUE: <input onChange={onChangeStartValue} value={props.startValue} className={classForInput} type='number' max='99' min='-99' />
    </div >
  );

}
export default SettingsDisplay;
