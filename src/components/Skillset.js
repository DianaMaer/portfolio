import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Skill from './Skill';

const Skillset = () =>{
    const skillset = [
        {name: 'Web Design',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla ut sem lobortis viverra sit amet ut arcu. Sed sodales a nibh nec elementum. ',
         technologies: ['HTML', 'CSS'],
         borderRadius: 100,
         widthOne: '20',
         widthTwo: '30',
         widthThree: '40',
         topOne: '0',
         topTwo: '7',
         topThree: '14px'
        },
        {name: 'Froentend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla ut sem lobortis viverra sit amet ut arcu. Sed sodales a nibh nec elementum. ',
        technologies: ['HTML', 'JavaScript'],
        borderRadius: '20',
        widthOne: '20',
        widthTwo: '30',
        widthThree: '40',
        topOne: '0',
        topTwo: '7',
        topThree: '14px'

        },
        {

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