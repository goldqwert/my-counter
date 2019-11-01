import React from 'react';
import './App.css';


const SettingsButtons = (props) => {

  const onChangeValue = () => {
    props.changeValueNumbers()
  }

  return (
    <div className='settings_buttons'>
      <button onClick={onChangeValue} className='settings_set'>SET</button>
    </div >
  );

}
export default SettingsButtons;
