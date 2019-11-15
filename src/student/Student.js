import React from 'react';

const student = (props)=>{
    return <div>
        <h1>Ik ben een student</h1>
        <p>Ik ben {Math.floor(Math.random() * 99)} jaar oud en ik hou van kaas</p>
        <p>Ik zit graag op stoel {props.stoel}</p>
        <p>Ik zou graag {props.favorietedier} willen aaien</p>
    </div>
}

export default student;