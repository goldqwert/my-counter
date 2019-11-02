import React from 'react';
import './App.css';


const Button = (props) => {

  const callback = () => {
    props.callback();
  }

  return (
    <div className={props.classForButton}>
      <button onClick={callback} disabled={props.disabled}>{props.title}</button>
    </div>
  );

}
export default Button;
