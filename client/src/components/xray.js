import React from 'react';

function Xray({ xray }) {
    return (
        <div>
            <h1>{xray.patientId}</h1>
            <h1>{xray.examId}</h1>
            <h1>{xray.keyFindings}</h1>
            <h1>{xray.brixiaScore}</h1>
            <h1>{xray.age}</h1>
            <h1>{xray.sex}</h1>
            <h1>{xray.bmi}</h1>
            <h1>{xray.zipCode}</h1>
        </div>
    ); 
}

export default Xray;