import React from 'react';


function HitsCard(props) {
    console.log(props.title)
    return (
        <ul>
            <h3>{props.title}</h3>
            <span>Author: {props.author} | </span> 
            <span>Created: {props.created} | </span> 
            <span>Points: {props.points} | </span> 
            <span>Comments: {props.comments} | </span> 
            <a href={props.url} rel="noreferrer" target='_blank'>{props.url}</a>
            
            
            <hr></hr>
            
        </ul>
        
    )
}

export default HitsCard;


















