import React from "react";

const Card = (props) => {
    return (
    <div>
        <img className="card" src={props.img} alt={props.alt} />
    </div>)
}

export default Card;