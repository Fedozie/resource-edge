import React from 'react';
import './HumanResourcesTab.css';

const HumanResourcesTab = (props) => {
    return (
        <div className = "tab">
            <picture>
                <source media="(max-width: 26.5625rem)" srcset={props.mobileImg}/>
                <img src={props.image} alt={props.altText}/>
            </picture>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}
 
export default HumanResourcesTab;