import React, { useState, useEffect } from 'react';
import test from '../images/test1.jpg'



const Project = ({projectInfo}) => {
    const [open, setOpen] = useState(false);
    
    //change the state of open
    const togglePanel = ()=> {
        //console.log(open);
        setOpen(!open);
    }
   console.log(`See what I have from Work`, {projectInfo});
    return (
    <div className="container-projects" id='projects'>

        <div className="project-header " onClick={()=>togglePanel()}>
            <h3>{projectInfo.projectName}</h3>
            {open ?   <h3>&uarr;</h3> : <h3>&darr;</h3>}
        </div>

        <div className="projects-container">
            {/* add the content of the container when is opened*/}
            {open &&
            (<div className="columns-projects">
                <div className="first-col-projects">
                    <p>{projectInfo.projectDescription}</p> 
                    <p>Technologies</p>
                    <div className="button-section">
                        <a href="">Visit</a> 
                        <a href="">Source</a>
                    </div>   
                </div>
                <div className="sec-col-projects">
                    <img src={projectInfo.projectUrl} alt=""/>
                </div>
            
            </div>)}
        </div>

    </div>
    );
}
    
    
export default Project;