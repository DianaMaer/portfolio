import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import {CSSTransition} from 'react-transition-group';
import Zoom from 'react-reveal/Zoom';
import { useSpring, useTransition, config, animated } from "react-spring";
import {Spring} from 'react-spring/renderprops';

 



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
            <ReactCardFlip isFlipped={flipp} flipDirection="vertical" flipSpeedFrontToBack="1.3" flipSpeedBackToFront="1.3">
                <div className="skill-face skill-face-front" >
                    {(index ===0) &&  
                       <>
                        <svg className="c-icon c-icon-design"viewBox="0 0 60 100">
                         <circle cx="30" cy="35" r="29"></circle>
                         <circle cx="30" cy="50" r="29"></circle>
                         <circle cx="30" cy="65" r="29"></circle>
                        </svg> 
                       </> 
                    }
                    
                    {(index ===1) &&  
                       <>
                        <svg className="c-icon c-icon-design"viewBox="0 0 80 100">
                         <rect x="32" y="12" width="45" height="45" rx="7" ry="7"></rect>
                         <rect x="17" y="28" width="45" height="45"rx="7" ry="7"></rect>
                         <rect x="1" y="43"  width="45" height="45" rx="7" ry="7"></rect>
                        </svg>  
                       </>
                    }
                    {(index ===2) &&  
                       <>
                        <svg className="c-icon c-icon-design"viewBox="0 0 90 90">
                         <circle cx="45" cy="45" r="13"></circle>
                         <circle cx="45" cy="45" r="28"></circle>
                         <circle cx="45" cy="45" r="43"></circle>
                        </svg>
                       </>
                    }
                  <div className="skill-content">
                    <h4>{skillInfo.name}</h4>
                    <p className="skill-description">{skillInfo.description} </p>
                    <p className="skill-technologies">{skillInfo.technologies} </p>
                    
                    {/* reveal the button if the mouse is inside of skill container*/}
                    </div>
                   {inside && 
                    <Zoom>
                        <h3 className="skill-button" onClick={handleClick}>&rarr;</h3>
                    </Zoom>}
                   
                </div>
                <div className="skill-face skill-face-back">
              
                    <button className="skill-button"onClick={handleClick}>
                        <p>balalalalallalal nfs,dfndkfjkfjejr lafjklejfrkj</p>
                        <h3>&larr;</h3>
                    </button>
                </div>
            </ReactCardFlip>
         </div>
    )
}

export default Skill;