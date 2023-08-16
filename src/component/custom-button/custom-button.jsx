import React from 'react';
import "./custom-button.css";

let CustomButton = (props) =>{
    return <button className={`btn ${props.type}`} onClick={props.logMessage}>{props.title}</button>
}

export default CustomButton;