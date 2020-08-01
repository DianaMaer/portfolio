import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Calling extends Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.typingEffect(this.props.calling);
        
    // }

    // //create a typing effect
    // typingEffect = (text) => {
    //     console.log(text);
    //     let i=0;
    //     if (i < text.length){
    //         document.getElementById("typing-effect").innerHTML += text.charAt(i);
    //         i++;
    //         setTimeout(()=> this.typingEffect, 20);
    //     }
    // }
    render(){
        console.log('props from calling:', this.props.calling);
            
        return(
            <div id="typing-effect">
                <ReactTypingEffect className="calling-text"text={this.props.calling}/>
               
            </div>
        )
            
    }
}

export default Calling;