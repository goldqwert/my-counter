import React from 'react';
import './App.css';


const Buttons = (props) => {

  const incClick = () => {
    props.incCount();
  }

  const resetCount = () => {
    props.resetState();
  }

  let disableInc = props.count === props.maxValue;

  return (
    <div className='counter_buttons'>
      <button className='counter_inc' onClick={incClick} disabled={disableInc}>INC</button>
      <button className='counter_reset' onClick={resetCount}>RESET</button>
    </div>
  );

}
export default Buttons;
