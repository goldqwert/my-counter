import React from 'react';
import './Display.css';

const Display = (props) => {

  let display = props.incorrectValue
    ? 'incorrect value'
    : (props.isValuesSet ? props.count : 'enter values and set button')

  let classForInc = display === props.maxValue ? 'display_max_value' :
    display === 'incorrect value' ? 'display_incorrect_value' : 'display_counter';
  debugger
  return (

    <div className={classForInc}>{display}</div>

  );

}
export default Display;
