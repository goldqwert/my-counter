import React from 'react';
import './Display.css';

const Display = (props) => {

  let display = props.state.incorrectValue
    ? 'incorrect value'
    : (props.state.isValuesSet ? props.state.count : 'enter values and set button')

  let classForInc = display === props.state.maxValue ? 'max_counter_active' :
    display === 'incorrect value' ? 'incorrect' : '';

  return (
    <div className='counter_display'>
      <div className={classForInc}>{display}</div>
    </div>
  );

}
export default Display;
