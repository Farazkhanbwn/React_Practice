import React, { Component, Fragment } from 'react'

export default class DataFetch extends Component {
    constructor(props){
        super(props);
        this.state={
            text: ""
        }
    }

    handleKey = (e) =>{
        // let test = e.target.innerHTML;
        // console.log(test);
        this.setState({text : e.target.innerHTML});
        console.log("value of div" , e.target.innerHTML);
    }

  render() {
    return (
        <Fragment>
            <div onKeyUp={this.handleKey} contentEditable>Hello</div>
            {/* <div onClick={this.handleKey}>Hello Web Developer</div> */}
            <div>{this.state.text}</div>
        </Fragment>
    )
  }
}