import React from 'react';
export default class ImageCollage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <button onClick={() => this.props.handleDisplayChange(0)}>Home</button>
                </div>
            </div>
        )
    }
}