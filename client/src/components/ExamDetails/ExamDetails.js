import React, { Component } from 'react';

const ExamDetails = () => {
    return (
        <>  
            <div className="titleDiv">
                <h1>Exam Details</h1>
            </div>
            <div className="examDetailsBody">
                <section className="patientInfo examDetails">
                    <h2>Patient Info</h2>
                    <h3>Patient ID:</h3>
                        <p>COVID-19-AR-16434409</p>
                    <h3>Age:</h3>
                        <p>99</p>
                    <h3>Sex:</h3>
                        <p>M</p>
                    <h3>Zip:</h3>
                        <p>10001</p>
                    <h3>Latest BMI:</h3>
                        <p>37.7</p>
                    <h3>Latest Weight:</h3>
                        <p>207</p>
                    <h3>ICU Admit:</h3>
                        <p>N</p>
                    <h3># ICU Admits:</h3>
                        <p>0</p>
                    <h3>Mortality:</h3>
                        <p>N</p>
                </section>
                <section className="examInfo examDetails">
                    <h2>Exam Info</h2>
                        <h3>Exam ID:</h3>
                            <p>Exam-1</p>
                        <h3>Notes:</h3>
                            <p>Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.</p>
                        <h3>Image:</h3>
                            <img src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png" alt="Chest X-Ray" />
                </section>
            </div>
        </>
        // <div>
        //     <h1>{xray.patientId}</h1>
        //     <h1>{xray.examId}</h1>
        //     <h1>{xray.keyFindings}</h1>
        //     <h1>{xray.brixiaScore}</h1>
        //     <h1>{xray.age}</h1>
        //     <h1>{xray.sex}</h1>
        //     <h1>{xray.bmi}</h1>
        //     <h1>{xray.zipCode}</h1>
        // </div>
    ); 
}

export default ExamDetails;