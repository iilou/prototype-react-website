import React, {useEffect, useState} from 'react';

import TitleScreen from './TitleScreen.js';
import NormalGame from './NormalGame.js';

const FlashMath = () => {
    const [difficulty, setDifficulty] = useState(0);
    // var difficulty = 0;
    
    const [rem, setRem] = useState(<TitleScreen changeRem={(type) => changeRem(type)} changeDifficulty={(newDif) => setDifficulty(newDif)} difficulty={difficulty}/>);

    const changeRem = (type) => {
        let newRem = <h1>Error Changing Windows :c</h1>;

        console.log(difficulty);

        if(type == 0) newRem = <TitleScreen changeRem={(type) => changeRem(type)} changeDifficulty={(newDif) => setDifficulty(newDif)} difficulty={difficulty}/>;
        else if(type == 1) newRem = <NormalGame changeRem={(type) => changeRem(type)} difficulty={difficulty}/>;

        setRem(newRem);
    }

    useEffect(()=>{
        console.log(difficulty);
    }, [difficulty])

    return (
        <>
            {rem}
        </>
    )
}

export default FlashMath;