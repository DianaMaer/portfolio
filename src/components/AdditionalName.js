import React from 'react';

const AdditionalName = (props) => {
    console.log('props from AdditionalName', props);
    return(
        <h4 className={props.mainSection ? "additional-name-hidd" : "additional-name" }>{props.name}</h4>
    )
}


export default AdditionalName;