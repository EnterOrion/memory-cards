import React from "react";

const Card = (props) => {
    return (
    <div>
        <img className="card" onClick={props.handleClick} key={props.id} src={props.img} alt={props.alt} />
    </div>)
}

export default Card;