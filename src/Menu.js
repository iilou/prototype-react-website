import React from 'react';

import {StyleSheet, css} from 'aphrodite';

import shiro from './images/shiro.png';
import akame from './images/akame.png';
import arisu from './images/arisu.png';
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
                    <button className={css(style.buttonElement)}>
                        <img src={shiina} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>Coming Soon !!</h1>
                        <h2 className={css(style.buttonArrow)}>&#8250;</h2>
                    </button>
                    <button className={css(style.buttonElement)} onClick={() => this.props.handleDisplayChange(1)}>
                        <img src={arisu} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>Flash Math</h1>
                        <h2 className={css(style.buttonArrow)}>&#8250;</h2>
                    </button>
                    <button className={css(style.buttonElement)} onClick={() => this.props.handleDisplayChange(1)}>
                        <img src={akame} className={css(style.buttonImage)}/>
                        <h1 className={css(style.buttonTitle)}>test</h1>
                        <h2 className={css(style.buttonArrow)}>&#8250;</h2>
                    </button>
                </div>
            </div>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#c196b8",
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
        backgroundImage: 'linear-gradient(45deg, #ac76a9, #ac76a9)',
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
        width:1000,
        height:'fit-content',
        paddingTop:30,
        paddingBottom:30,
        margin:'auto',
        marginTop:120,
        
        borderRadius:150,

        display: 'grid',
        gridTemplateColumns: 'auto',

        transition:'0.2s',

        backgroundImage: 'linear-gradient(45deg, #d7d16c, #e3dd88)',

        ':hover':{
            transition:'0.2s',

            boxShadow: '50px 50px #e3dd88',
            transform: 'translate(-20px, -20px)'
        }
    },

    buttonElement:{
        backgroundColor:"#eda6a7",

        width:700,
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
            backgroundColor:'#d26e70',

            transform:'translate(-60px,-5px)',
            transition:'0.2s',

            boxShadow:'120px 30px #eda6a7'
        },

        ':hover img':{
            transform:'translate(-30px, 0)',
            transition:'0.2s'
        },

        ':hover h1':{
            transform:'translate(-70px, 0)',
            transition:'0.4s'
        },

        ':hover h2':{
            opacity:100,
            transition:'1s'
        },

        ':active':{

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
        width:400,
        
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