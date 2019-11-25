import React from 'react';
import './Button.css';


const Button = (props) => {

  const callback = () => {
    props.callback();
  }

  let classForButton = props.title === 'INC' ? 'counter_inc' :
    props.title === 'RESET' ? 'counter_reset' :
      props.title === 'SET' ? 'settings_set ' :
        '';

  return (
    <div>
      <button className={classForButton} onClick={callback} disabled={props.disabled}>{props.title}</button>
    </div >
  );

}
export default Button;
