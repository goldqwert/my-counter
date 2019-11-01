import React from 'react';
import './App.css';


const SettingsDisplay = (props) => {

  const onChangeMaxValue = (e) => {
    let maxValue = e.currentTarget.value;
    props.addMaxValue(maxValue);
  }

  const onChangeMinValue = (e) => {
    let minValue = e.currentTarget.value;
    props.addMinValue(minValue)
    
  }

  

  return (
    <div className='settings_display'>
      MAX VALUE: <input disabled={} onChange={onChangeMaxValue} value={props.maxValue} className='settings_max' type='number' max='99' min='-99' />
      MIN VALUE: <input onChange={onChangeMinValue} value={props.minValue} className='settings_min' type='number' max='99' min='-99' />
    </div >
  );

}
export default SettingsDisplay;
