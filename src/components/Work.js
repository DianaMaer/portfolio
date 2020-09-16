import React from 'react';
import Project from './Project';

const Work = ({projects }) => {
    console.log(projects)
    return(
        <div className="container-projects" id='projects'>
            <h2>Work</h2>

            {projects.map(project => <Project projectInfo={projects} key={projects.id}/>)}
        </div>
    )
}

export default Work;