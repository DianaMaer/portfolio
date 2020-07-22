import React from 'react';

const Headline = (props) => {
    console.log('props from headline', props);
    return(
        <h4>{props.about}</h4>
    )
}

export default Headline;