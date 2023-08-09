import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from './component/alert';

// ReactDOM.render(<App/> , document.getElementById("root"))
ReactDOM.render(<Alert color = "warning"/> , document.getElementById("root"));
// const root = ReactDOM.render(document.getElementById('root'));
// ReactDOM.render(<Alert /> , document.getElementById("root"));

// ReactDOM.render(alert , document.getElementById("root"));

reportWebVitals();
