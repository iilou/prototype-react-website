import React from 'react';

const Button = (props) => {
    return(
        <button onClick={() => props.command()}>
            <img src={props.image}></img>
            <h1>{props.name}</h1>
        </button>
    );
}

export default Button;