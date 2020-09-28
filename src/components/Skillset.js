import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';


class Skillset extends Component{
    constructor(){
        super();
        this.state = {
            isFlipped: false,
        };
    }

    handleClick =(e) => {
        console.log('click');
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
    }
     
    render(){
     const { isFlipped } =this.state;
     return(
        <div id="skillset" className="container-skillset"> 
          <h2>SKILLSET</h2>
          <div className="component-content component-content-skill"> 
            <div className="skill">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="skill-face skill-face-front">
                <h4>Webdesign</h4>
                <img className="webdesign-icon"src="webdesign.svg" alt="webdesign-icon"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla ut sem lobortis viverra sit amet ut arcu. Sed sodales a nibh nec elementum. Vestibulum cursus enim quis lobortis hendrerit. </p>
                <button onClick={this.handleClick}>Click to flip</button>
            </div>
 
            <div className="skill-face skill-face-back">
            back
                <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip>
            </div>

            <div className="skill">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="skill-face skill-face-front">
                <h4>Webdesign</h4>
                <img className="webdesign-icon"src="webdesign.svg" alt="webdesign-icon"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla ut sem lobortis viverra sit amet ut arcu. Sed sodales a nibh nec elementum. Vestibulum cursus enim quis lobortis hendrerit. </p>
                <button onClick={this.handleClick}>Click to flip</button>
            </div>
 
            <div className="skill-face skill-face-back">
            back
                <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip>
            </div>

            <div className="skill">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="skill-face skill-face-front">
                <h4>Webdesign</h4>
                <img className="webdesign-icon"src="webdesign.svg" alt="webdesign-icon"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla ut sem lobortis viverra sit amet ut arcu. Sed sodales a nibh nec elementum. Vestibulum cursus enim quis lobortis hendrerit. </p>
                <button onClick={this.handleClick}>Click to flip</button>
            </div>
 
            <div className="skill-face skill-face-back">
            back
                <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip>
            </div>
          </div> {/*--end component-content component-content-skill*/}
        </div>  /*--end skillset */ 
    )
    }   
}
export default Skillset;