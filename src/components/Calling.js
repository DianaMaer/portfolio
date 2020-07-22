import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { render } from 'react-dom';

//create a typing effect
//const typingEffect= (text) => {
//    console.log(text);
//}

class Calling extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('props from calling:', this.props);
            
        return(
            <div>test from Calling</div>
        )
            
    }
}

export default Calling;