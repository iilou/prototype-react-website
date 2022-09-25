import React, {useState} from 'react';

const NormalGame = (props) => {
    //props -> difficulty, changeRem()

    var multiply_bound = [2, 9];
    var add_bound = [1, 99];
    var val_bound = [100, 500];
    var min_length = 5;

    var ram = new Array(min_length);
    var ram_op = new Array(min_length-1);

    function createRam(){
        ram_op.map((current) => current=Math.round(Math.random()));
        ram_op.map((current) => console.log(current));
    }

    return(
        <>
            <h1>{props.difficulty}</h1>
            <button onClick={() => createRam()}>start</button>
        </>
    )
}

export default NormalGame;