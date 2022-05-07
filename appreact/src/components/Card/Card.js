import React from "react";
import './Card.css';

function Card(props){

    const nombreCard = "card " + props.className;

    return(
        <div className={nombreCard}>
            {props.children}
        </div>
    );
}

export default Card;