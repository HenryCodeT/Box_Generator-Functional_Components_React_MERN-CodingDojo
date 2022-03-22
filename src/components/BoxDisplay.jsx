import React, { useState } from 'react';

const BoxDisplay = (props) =>{
    const boxStyle = {
        backgroundColor:`${props.boxColor}`,
        width: `${props.boxWidth}px`,
        height: `${props.boxHeight}px`,
        boxShadow:"-1px 1px 7px 0px #C0C0C0"
    };
    return(
    <div style={{border: "solid", display: "inline-block", margin: "10px",}}>
        <div style={boxStyle} ></div>
    </div>
    );
    
}
export default BoxDisplay;