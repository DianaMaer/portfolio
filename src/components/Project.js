import React, { useState, useEffect } from 'react';
import test from '../images/test1.jpg';

const Project = ({projectInfo}) => {
    const [open, setOpen] = useState(false);
    
    //change the state of open
    const togglePanel = ()=> {
        //console.log(open);
        setOpen(!open);
    }
   console.log(`Props from Work`, {projectInfo});
    return (
    <div className="component-content component-content-project">
        <div className="project-header " onClick={()=>togglePanel()}>
            <h3>{projectInfo.name}Project Name</h3>
            {open ?  <h3>&uarr;</h3> : <h3>&darr;</h3>}
        </div>

        <div className="projects-container">
            {/* add the content of the container when is opened*/}
            {open &&
            (<div className="columns-projects">
                <div className="first-col-projects">
                    <p class="text-description">{projectInfo.description}Cras id elementum massa. Vivamus dolor eros, vehicula vel sem dictum, porttitor venenatis mauris. Duis placerat nec erat eget pharetra. Vivamus vehicula nulla nec sapien pulvinar finibus. Nulla in enim velit. </p> 
                    <p class="text-technologies">{projectInfo.technologie} HTML, CSS, React</p>
                    <div className="button-section">
                        <a href="">
                            <img className="img-button" src="globe.svg" alt=""/>
                            <p className="text-button">Visit</p>
                        </a> 
                        <a href="">
                            <img className="img-button" src="github.svg" alt=""/>
                            <p className="text-button">Source</p>
                        </a> 
                    </div>   
                </div>
                <div className="sec-col-projects">
                    <img className="screen-shot" src={projectInfo.url} alt="screen-shot-project"/>
                </div>
            </div>)}
        </div>
    </div>
    );
}
    
    
export default Project;