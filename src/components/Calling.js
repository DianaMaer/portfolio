import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './Home.css';

//create a typing effect
//const typingEffect= (text) => {
//    console.log(text);
//}

class Calling extends Component{
    render(){
        console.log('props from calling:', this.props);
            
        return(
            <>
            <ReactTypingEffect className="calling-text" text={this.props.calling}/>
            </>
        )
            
    }
}

export default Calling;