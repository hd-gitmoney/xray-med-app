import React, { Component } from 'react';

function Xray({ xray }){
    return (
        <div>
            <h1>{xray.patientId}</h1>
        </div>
    ); 
}

export default Xray;