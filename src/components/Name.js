import React from 'react';

const Name = (props) => {
    console.log('props from name:', props);
    return(
        <h1>{props.name}</h1>
    )
}

export default Name;