import React from "react";
import './Card.css';

function getColor(props) {
    let color = "";
    if(props.red) color = "red";
    if(props.green) color = "green";
    if(props.blue) color = "blue";
    if(props.purple) color = "purple";
    return color;
}

export default (props) => {
    return (
        <div className={`card ${getColor(props)}`}>
            <div className="header">
                <span className="title">{props.title}</span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}