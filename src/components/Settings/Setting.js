import React from 'react';
import './Setting.css';


const Settings = (props) => {

  const onChangeMaxValue = (e) => {
    props.changeMaxValue(e.currentTarget.value.replace(/\./g, ''));
  }

  const onChangeStartValue = (e) => {
    props.changeStartValue(e.currentTarget.value.replace(/\./g, ''))

  }

  let classForInput = props.incorrectValue ? 'settings_error' : 'settings_inputs';


  return (
    <div className='settings_display'>
      MAX VALUE: <input onChange={onChangeMaxValue} value={props.maxValue} className={classForInput} pattern="\d+" type='number' max='99' min='-99' />
      START VALUE: <input onChange={onChangeStartValue} value={props.startValue} className={classForInput} pattern="\d+" type='number' max='99' min='-99' />
    </div >
  );

}
export default Settings;
