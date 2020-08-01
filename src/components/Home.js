import React from 'react';
import Calling from './Calling';
import AdditionalName from './AdditionalName';

const Home = (props) => {
    console.log('props from home:', props);
    return(
        <div className="container-home" id='home'>
            <AdditionalName name={props.name} mainSection={props.mainSection} />
            <div className="component-content">
                 <h1>{props.name}</h1>
                    <Calling calling={props.calling} />
                <h4>{props.about}</h4>
            </div>
        </div>
    )
}


export default Home;