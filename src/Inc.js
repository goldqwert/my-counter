import React from 'react';
import logo from './logo.svg';
import './App.css';

class Inc extends React.Component {
  render = () => {

    let classForInc = this.props.state.count === 5 ? 'filter-active' : '';

    return (
      <div className='counter_result'>
        {/* {this.props.count} */}<div className={classForInc}>{this.props.state.count}</div>
      </div>
    );
  }
}
export default Inc;
