import React from 'react';

import Menu from './Menu.js';
import ImageCollage from './ImageCollage.js';

export default class App extends React.Component{
    constructor(){
        super();
        this.displays = [<Menu handleDisplayChange={this.handleDisplayChange}/>, <ImageCollage handleDisplayChange={this.handleDisplayChange}/>];
        this.state = {display:0};
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