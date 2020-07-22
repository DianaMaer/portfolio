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
        <div className="main-component home" id='home'>
            <AdditionalName name={props.name} title={props.title} />
            <div className="component-content">
                <Name name={props.name} />
                <Calling calling={props.calling} />
                <Headline about={props.about} />
            </div>
        </div>
    )
}


export default Home;