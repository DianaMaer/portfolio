import React, { useState, useEffect } from 'react';
import AdditionalName from './AdditionalName';
import test from '../images/test1.jpg'



const Projects = (props) => {
    const [open, setOpen] = useState(false)
    
    //change the state of open
    const togglePanel = ()=> {
        console.log(open);
        setOpen(!open);
    }
   
    return (
    <div className="tehnical-sections-container" id='projects'>
        <h2>Work</h2>
        <AdditionalName name={props.profile.name} mainSection={props.profile.mainSection} />

        <div className="project-header " onClick={()=>togglePanel()}>
            <h3>{props.projects.nameProject}</h3>
            {open ?     <h3>&uarr;</h3> : <h3>&darr;</h3>}
        </div>

    {/* add the line below project name only when the container is closed*/}
        <div className="projects-container">
            {/* {open ? null : <hr/>}*/}

            {/* add the content of the container when is opened*/}
            {open &&
            (<div className="columns-projects">
                <div className="first-col-projects">
                    <p>{props.projects.description}</p> 
                    <p>Technologies</p>
                    <div className="button-section">
                        <a href="">Visit</a> 
                        <a href="">Source</a>
                    </div>   
                </div>
                <div className="sec-col-projects">
                    <img src={test} alt=""/>
                </div>
            
            </div>)}
        </div>

    </div>
    );
}
    
    
export default Projects;