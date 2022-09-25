import React from 'react';

import Menu from './Menu.js';
import ImageCollage from './ImageCollage.js';
import FlashMath from './FlashMath/FlashMath.js';


export default class App extends React.Component{
    constructor(){
        super();
        this.displays = [<Menu handleDisplayChange={this.handleDisplayChange}/>, <FlashMath handleDisplayChange={this.handleDisplayChange}/>];
        this.state = {display:1};
    }

    handleDisplayChange = d => {
        console.log("a");
        this.setState({display:d});};

    render(){
        return(
            <div style={{margin:0}}>
                {this.displays[this.state.display]}
            </div>
        );
    }
}