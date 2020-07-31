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
        <div className="main-component-home" id='home'>
            <AdditionalName name={props.name} mainSection={props.mainSection} />
            <div className="component-content">
                {/*<div className="name-calling-wrapper">*/}
                    <Name name={props.name} />
                    <Calling calling={props.calling} />
                {/*</div>*/}
                <Headline about={props.about} />
            </div>
        </div>
    )
}


export default Home;