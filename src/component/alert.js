import './alert.css';
import './alert.js';
import React , {Component} from "react";
// import ReactDOM  from "react-dom";

// Using Class
class Alert extends Component{
    render()
    {
        return <div className={`bg-color ${this.props.color}`}>We are Learning React at Problem solutions</div>
    }
}

// using Function
// const Alert = (props) => {
//     return <div className={`bg-color ${props.color}`}>Hello we are Learning</div>
// }

export default Alert;