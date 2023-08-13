import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
import Bootbtn from './component/bootstrap_btn';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from './component/alert';
import DataFetch from './component/div-data-fetch/data_fetch';

ReactDOM.render(<App/> , document.getElementById("root"));
// ReactDOM.render(<NumberKeyboard /> , document.getElementById("root") );
// ReactDOM.render(<Alert color = "warning"/> , document.getElementById("root"));

// direct render of Bootbtn
// ReactDOM.render(<Bootbtn type = "primary" text = "read more"/> , document.getElementById("btn"));

// ReactDOM.render(alert , document.getElementById("root"));

reportWebVitals();