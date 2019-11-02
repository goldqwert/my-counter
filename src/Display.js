import React from 'react';
import './App.css';

const Display = (props) => {

  let classForInc = props.state.count === props.state.maxValue ? 'filter-active' : '';

  let valueDisplay = props.numbersOnChange === true ? 'enter values and press set' : props.state.count;

  return (
    <div className='counter_display'>
      {/* {this.props.count} */}<div className={classForInc}>{valueDisplay}</div>
    </div>
  );

}
export default Display;
