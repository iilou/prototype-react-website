import React from 'react';
import './Calendar.css';
import home from './home.png';

export default class Calendar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id='b_container'>
                <div id='b_navbar'>
                    <button id='b_homebutton' onClick={() => this.props.handleDisplayChange(0)}>
                        <img src={home}></img>
                        <p>Home</p>
                    </button>
                    <h1 className='b_heading'>Calendar</h1>
                </div>

                <div id='image'>

                </div>

                <div id='collage'>

                </div>
            </div>
        )
    }
}