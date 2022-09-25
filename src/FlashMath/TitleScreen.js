import React, { useState } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Button from './Button.js';

function TitleScreen(props){
    //props -> changeRem(type), changeDifficulty(difficulty), difficulty
    return (
        <div>
            <Header />
            <Button command={() => {props.changeRem(1)}} name="Start"/>
            <Button command={() => props.changeDifficulty(props.difficulty+1)} name="Counter"/>
            <Button name={props.difficulty}/>
            <Footer />
        </div>
    )
}

export default TitleScreen;