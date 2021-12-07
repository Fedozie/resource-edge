import React from 'react';
import './HumanResourcesTab.css';

const HumanResourcesTab = (props) => {
    return (
        <div className = "tab">
            <img src={props.image} alt={props.altText}/>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}
 
export default HumanResourcesTab;