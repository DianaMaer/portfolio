import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Skill from './Skill';
import './Skill.css';

const Skillset = () =>{
    const skillset = [
        {name: 'Web Design',
         description: 'In my hands, every project deserves going for the extra mile finding the exact right color scheme, layout and font.',
         technologies: 'HTML, CSS',
         course: 'I started the adventure by taking a Web Design Course at',
         school: 'Online Schule für Gestaltung',
         img:'',
        },
        {name: 'Front-End Development',
        description: 'I enjoy bringing ideas to life in the browser and  developing rich web experiences & web applications.',
        technologies: 'JavaScript, React, Github',
        course: 'I started the adventure by taking a Web Design Course at',
        school: 'Wilde Code School',
        img:'',
        },
        {name: 'User Experience',
        description: 'I care about people, and believe in putting the user first offering them thoughtful interactions and relevant experiences',
        technologies: 'Design Thinking, Usabilty',
        course: 'I started the adventure by taking a Web Design Course at',
        school: 'Wilde Code School',
        img:'',
        },
    ]

    const [flipp, setFlipp] = useState(false);

    const handleClick =() => {
        console.log('click');
        setFlipp(!flipp)
    }
     return(
        <div id="skillset" className="container-skillset"> 
          <h2>SKILLSET</h2>
          <div className="component-content component-content-skill"> 
          {skillset.map((skill, index) => <Skill skillInfo={skill} index={index} />)}
        
            
          </div> {/*--end component-content component-content-skill*/}
        </div>  /*--end skillset */ 
    );
 
}
export default Skillset;