import React from 'react';

import {StyleSheet, css} from 'aphrodite';

import shiro from './images/shiro.png';
import akame from './images/akame.png';
import shiina from './images/shiina.png';

export default class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state = {deltay: 0, isHovered: [false, false, false]};
    }

    render(){
        return (
            <div className={css(style.container)}>
                <button>asdf</button>
                <div className={css(style.titleContainer)}>
                    <h1 className={css(style.titleText, style.titleGradient)}>React Sandbox</h1>
                </div>
                <div>
                    <img src={shiro} alt='shiro' className={css(style.titleImage)}/>
                </div>
                <h1 className={css(style.titleText, style.titleGradient)} id="origin">-</h1>
                <div className={css(style.buttonContainer)}>
                    <button className={css(style.buttonElement)} onClick={() => this.props.handleDisplayChange(1)}>
                        <img src={shiina} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>M by J</h1>
                        <h2 className={css(style.buttonArrow)}>&#8250;</h2>
                    </button>
                    <button className={css(style.buttonElement)} onClick={() => this.props.handleDisplayChange(1)}>
                        <img src={akame} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>test</h1>
                    </button>
                    <button className={css(style.buttonElement)} onClick={() => this.props.handleDisplayChange(1)}>
                        <img src={akame} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>test</h1>
                    </button>
                </div>
            </div>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#E7CFEA",
        position: 'relative'
    },

    titleContainer:{
        width:700,
        height:'fit-content',
        margin:'auto',
        paddingTop:100
    },

    titleText:{
        fontSize: 150,
        textAlign: 'center',
        margin:'auto',
    },

    titleGradient:{
        backgroundImage: 'linear-gradient(45deg, #efe633, #998CD9)',
        backgroundClip: 'text',
        color:'rgba(0,0,0,0)',

        zIndex: 3
    },

    titleImage:{
        width: '500px',
        height: '500px',
        
        display: 'block',

        margin:'auto',
        paddingTop:300,
        paddingBottom:300
    },

    buttonContainer:{
        width:800,
        height:'fit-content',
        paddingTop:30,
        paddingBottom:30,
        margin:'auto',
        marginTop:120,
        
        borderRadius:150,

        display: 'grid',
        gridTemplateColumns: 'auto',

        backgroundColor: '#D1A6D8'
    },

    buttonElement:{
        width:600,
        height:150,

        margin:'auto',
        marginTop:20,
        marginBottom:20,

        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',

        border:'0px',
        borderRadius:50,

        transition:'0.3s',

        ':hover':{
            backgroundColor:'black',
            transition:'0.3s'
        },

        ':hover img':{
            transform:'translate(-70px, 0)',
            transition:'0.14s'
        },

        ':hover h1':{
            transform:'translate(-140px, 0)',
            transition:'0.2s'
        },

        ':hover h2':{
            opacity:100,
            transition:'0.5s'
        }   
    },

    buttonImage:{
        width:100,
        height:100,

        opacity:'70%',

        borderRadius:30,

        backgroundColor:'white',

        objectFit:'cover'
    },

    buttonTitle:{
        width:200,
        
        fontSize:50,

        textAlign:'left',

        color:"#e7c8eb"
    },

    buttonArrow:{
        position: 'absolute',

        transform:'translate(240px, -7px)',
        width:100,
        fontSize:100,
        opacity:0,
        color:"#e7c8eb"
    },

    topFade:{
        height:400,
        width:'100%',
        top:0,
        position:'fixed',

        zIndex:2,

        backgroundImage: 'linear-gradient(180deg, rgba(231, 207, 234, 100), rgba(231, 207, 234, 0))'
    },

    globals: {
        '*h1': {
            fontFamily: 'Verbana'
        }
    }
});