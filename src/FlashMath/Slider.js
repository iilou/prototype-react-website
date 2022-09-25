import {React, useState} from 'react';

import Button from './Button.js';

const Slider = (props) => {
    let componentList = new Array(props.size);
    for(let i = 0; i < props.size; i++){
        componentList[i] = <Button key={i} name={props.itemNames[i]} onClick={() => {props.itemFunction(i)}} />
    }

    return (
        <div>
            <Button name={props.name}/>
            <div>
                {componentList}
            </div>
        </div>
    )
}

export default Slider;