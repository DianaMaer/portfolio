import React from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import './Work.css';

const Work = ({projects }) => {
    console.log(projects)
    return(
        <div className="container-projects" id="work">
            <h2>Work</h2>
            <div className="component-content"> 
                {projects.map(project => <Project projectInfo={projects} key={projects.id}/>)}
            </div>
        </div>
    )
}

export default Work;