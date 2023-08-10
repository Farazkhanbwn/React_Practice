import React, { Component } from 'react'

class Bootbtn extends Component{
    render(){
        return <button className={`btn ${this.props.type}`}>{this.props.text}</button>
    }
}

export default Bootbtn;