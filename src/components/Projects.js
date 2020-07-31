import React, { useState, useEffect } from 'react';
import AdditionalName from './AdditionalName';
import test from '../images/test1.png'
import './Projects.css';
import Collapsible from 'react-collapsible';


{/*const Projects = ({profile, projects}) => {
 
    return(
        <div id='projects'>
            
         <AdditionalName name={profile.name} mainSection={profile.mainSection} />
         <Collapsible classParentString="collapsible-section"trigger={projects.nameProject}>
             <hr />
            <p>{projects.nameProject}</p>
            <p>{projects.description}</p>
            <img src={test} alt="project-img"/>
    </Collapsible>
            </div>
            ); 
}*/}

const Projects = (props) => {
    const [open, setOpen] = useState(false)
    
    
    const togglePanel = ()=> {
        setOpen(!open);
    }
    
   // useEffect()
   
    return (
    <div id='projects'>
        <AdditionalName name={props.profile.name} mainSection={props.profile.mainSection} />
        <div className="project-header" onClick={()=>togglePanel()}>
        <h3>{props.projects.nameProject}</h3>
        {open ?  <h3>&uarr;</h3> : <h3>&darr;</h3>}
       </div>
       {open ? null :<hr/>}
        {open ? (<><div className='content'>
         {props.projects.description} </div>
         <hr /></>)
       : null}
    </div>);
    }
    
    
export default Projects;