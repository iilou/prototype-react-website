import {React, useState} from 'react';

import Slider from './Slider.js';



const Header = () => {
    return(
        <div>
            <h1>header</h1>
            <Slider name="Slider" size={3} itemNames={["Easy", "Normal", "Hard"]}/>
        </div>
        
    );
};

export default Header;