import React from 'react';
import './Setting.css';


const Settings = (props) => {

  const onChangeMaxValue = (e) => {
    let maxValue = e.currentTarget.value;
    props.changeMaxValue(maxValue);
  }

  const onChangeStartValue = (e) => {
    let startValue = e.currentTarget.value;
    props.changeStartValue(startValue)

  }

  let classForInput = props.incorrectValue ? 'settings_error' : 'settings_inputs';


  return (
    <div className='settings_display'>
      MAX VALUE: <input onChange={onChangeMaxValue} value={props.maxValue} className={classForInput} type='number' max='99' min='-99' />
      START VALUE: <input onChange={onChangeStartValue} value={props.startValue} className={classForInput} type='number' max='99' min='-99' />
    </div >
  );

}
export default Settings;
