import React from 'react';
import AdditionalName from './AdditionalName';
import './Projects.css';


const Projects = (props) => {
    return(
        <div id='projects'>
         <AdditionalName name={props.name} mainSection={props.mainSection} />
        </div>
    )
}
export default Projects;