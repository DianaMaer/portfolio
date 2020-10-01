import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Skill from './Skill';

const Skillset = () =>{
    const skillset = [
        {name: 'Web Design',
         description: 'In my hands, every project deserves going for the extra mile finding the exact right color scheme, layout and font.',
         technologies: ['HTML', 'CSS'],
        },
        {name: 'Front-End Development',
        description: 'I enjoy bringing ideas to life in the browser and  developing rich web experiences & web applications.',
        technologies: 'HTML, CSS, JavaScript, React, Github',
        },
        {name: 'User Experience',
        description: 'I care about people, and believe in putting the user first offering them thoughtful interactions and relevant experiences',
        technologies: 'Design Thinking, Design Thinking, Design Thinking',
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