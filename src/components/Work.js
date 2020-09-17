import React from 'react';
import Project from './Project';

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