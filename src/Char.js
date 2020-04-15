import React from 'react';


function Char(props){
    const style ={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border: '1px solid black',
        textAligin: 'center'
    };

    return(
        <div style={style onclick={props.clicked}>
            {props.character}
        </div>
    );
}

export default Char;
