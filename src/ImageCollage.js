import React from 'react';
import './ImageCollage.module.css';

export default class ImageCollage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id='container'>
                <div id='navbar'>
                    <button className='button' onClick={() => this.props.handleDisplayChange(0)}>Home</button>
                </div>

                <div id='image'>

                </div>

                <div id='collage'>

                </div>
            </div>
        )
    }
}