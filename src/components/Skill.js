import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import {CSSTransition} from 'react-transition-group';
import Zoom from 'react-reveal/Zoom';

const Skill = ({ skillInfo, index }) => {
    const [flipp, setFlipp] = useState(false);
    const [inside, setInside] = useState(false);

    const handleClick =() => {
        console.log('click');
        setFlipp(!flipp)
    }

    const handleMouseEnter =() => {
        console.log('hover');
        setInside(!inside)
    }
    const handleMouseLeave =() => {
        console.log('hover');
        setInside(!inside)
    }
    console.log(skillInfo);
    console.log(index);
    return(
        <div className="skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ReactCardFlip isFlipped={flipp} flipDirection="vertical">
                <div className="skill-face skill-face-front" >
                    <div className="stack-shapes">
                    {(index ===0) &&  <>
                       <div className="shape-circle shape-one" ></div>
                        <div className="shape-circle shape-two" ></div>
                        <div className="shape-circle shape-three" ></div></> 
                    }
                    
                    {(index ===1) &&  <>
                       <div className="shape-sqaure shape-one" ></div>
                        <div className="shape-sqaure shape-two" ></div>
                        <div className="shape-sqaure shape-three" ></div></> 
                    }
                    {(index ===2) &&  <>
                       <div className="shape-circle shape-one-plus" ></div>
                        <div className="shape-circle shape-two-plus" ></div>
                        <div className="shape-circle shape-three-plus" ></div></> 
                    }
                    
                    </div>
                    <h4>{skillInfo.name}</h4>
                    <p className="skill-description">{skillInfo.description} </p>
                    <p className="skill-technologies">{skillInfo.technologies} </p>
                    
                    {/* reveal the button if the mouse is inside of skill container*/}
                    {inside && 
                    <Zoom >
                        <h3 className="skill-button" onClick={handleClick}>&rarr;</h3>
                    </Zoom>}
                   
                </div>
                <div className="skill-face skill-face-back">
                back
                    <button className="skill-button"onClick={handleClick}>
                        <h3>&larr;</h3>
                    </button>
                </div>
            </ReactCardFlip>
         </div>
    )
}

export default Skill;