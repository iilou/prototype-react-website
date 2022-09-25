import {React, useState} from 'react';

const Footer = () => {
    const randomFacts = ["The dot used in lowercase 'i' and 'j' is called a tittle.", 
    "The giant squid's brain is a torus shape, and its esophagus runs through it. If the squid eats anything too big, it will suffer massive brain damage. (Evolution at its finest...)", 
    "The planet Mercury's day is longer than it's year.",
    "You are always looking at your nose, your brain just chooses to ignore it.",
    "'Subcontinental' has all vowels in reverse order",
    "Ohio is the only state in the US which shares no letters with the word 'mackerel'.",
    "Your tastebuds don't respond the same in mid flight as they do on the ground, so airline food has to be prepared specially to appeal to mile-high you."];

    const [fact, setFact] = useState(randomFacts[Math.floor(Math.random()*randomFacts.length)]);

    return(
        <div>
            <h1>{fact}</h1>
        </div>
    )
}

export default Footer;