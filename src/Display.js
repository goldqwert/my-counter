import React from 'react';
import './App.css';

const Display = (props) => {

  let classForInc = props.state.count === props.state.maxValue ? 'filter-active' : '';

  return (
    <div className='counter_display'>
      {/* {this.props.count} */}<div className={classForInc}>{props.state.count}</div>
    </div>
  );

}
export default Display;
