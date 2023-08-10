import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
import Bootbtn from './component/bootstrap_btn';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from './component/alert';

// ReactDOM.render(<App/> , document.getElementById("btn"));
// ReactDOM.render(<Alert color = "warning"/> , document.getElementById("root"));

// direct render of Bootbtn
ReactDOM.render(<Bootbtn type = "primary" text = "read more"/> , document.getElementById("btn"));

// ReactDOM.render(alert , document.getElementById("root"));

reportWebVitals();
