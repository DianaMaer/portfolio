import React, { useState, useEffect } from 'react';
import AdditionalName from './AdditionalName';
import test from '../images/test1.png'


const Projects = (props) => {
    const [open, setOpen] = useState(false)
    
    
    const togglePanel = ()=> {
        setOpen(!open);
    }
    
   // useEffect()
   
    return (
    <div className="container-tehnical-sections" id='projects'>
        <h2>Work</h2>
        <AdditionalName name={props.profile.name} mainSection={props.profile.mainSection} />
        <div className="project-header" onClick={()=>togglePanel()}>
            <h3>{props.projects.nameProject}</h3>
            {open ?     <h3>&uarr;</h3> : <h3>&darr;</h3>}
        </div>

    {/* add the line below project name only when the container is closed*/}
        {open ? null : <hr/>}

        {/* add the content of the container when is opened*/}
        {open ? (<>
                    <div className='content'>
                    {props.projects.description} </div>
                    <hr />
                </>): null}
    </div>);
    }
    
    
export default Projects;