import React from 'react';
import Name from './Name';
import Calling from './Calling';
import Headline from './Headline';
import AdditionalName from './AdditionalName';
import './Home.css';
import '../App.css';


const Home = (props) => {
    console.log('props from home:', props);
    return(
        <div className="main-component" id='home'>
            <AdditionalName name={props.name} title={props.title} />
            <div className="component-content">
                <Name name={props.name} />
                <Calling calling={props.calling} />
                <Headline about={props.about} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat.</p>
               
            </div>
        </div>
    )
}


export default Home;