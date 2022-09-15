import React from 'react';
import './Menu.modules.css';

import shiro from './shiro.png';
import akame from './akame.png';
import logo_calendar from './logo_calendar.png';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="container">
                <div>
                    <div>
                        <h1 id='title_text_border'>React Sandbox</h1>
                        <h1 id='title_text' className='text_gradient'>React Sandbox</h1>
                    </div>
                    
                    <div id='title_img_container'>
                        <img src={shiro} alt='shiro' id='title_img'/>
                        {/* <div class='shadow'></div> */}
                    </div>
                    <h1 id='dash' className='text_gradient'>-</h1>
                </div>
                <div id='buttonss'>
                    <div id='button_grid'>
                        <button className='button' onClick={() => this.props.handleDisplayChange(1)}>
                            <img src={akame} className='button_img'/>
                            <h1 className='button_text'>Image Collage</h1>
                            <h1 className='button_arrow'>&#8250;</h1>
                        </button>
                        <button className='button' onClick={() => this.props.handleDisplayChange(2)}>
                            <img src={logo_calendar} className='button_img'/>
                            <h1 className='button_text'>Calendar</h1>
                            <h1 className='button_arrow'>&#8250;</h1>
                        </button>
                        <button className='button'>

                        </button>
                    </div>
                </div>
            </div>
        )
    }
}