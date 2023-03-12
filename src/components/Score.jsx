import React from "react";

const Score = (props) => {
    return (
        <div className="score">
            <p>Current Score: {props.score}</p>
            <p>Top Score: {props.topScore}</p>
        </div>

    )

}

export default Score;