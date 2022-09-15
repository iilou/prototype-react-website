import React from 'react';
import Menu from './Menu.js';
import ImageCollage from './ImageCollage.js';
import Calendar from './Calendar.js';

export default class App extends React.Component{
    constructor(){
        super();
        this.displays = [<Menu handleDisplayChange={this.handleDisplayChange}/>, <ImageCollage handleDisplayChange={this.handleDisplayChange}/>, <Calendar handleDisplayChange={this.handleDisplayChange}/>, <ImageCollage handleDisplayChange={this.handleDisplayChange}/>];
        this.state = {display:0};
    }

    handleDisplayChange = d => {
        console.log("a");
        this.setState({display:d});};

    render(){
        return(
            <div>
                {this.displays[this.state.display]}
            </div>
        );
    }
}