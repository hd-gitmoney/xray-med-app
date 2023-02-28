import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const Admin = ({exams}) => {
    // state = {  } 
    // render() { 
    return(
        <Table striped="columns" bordered hover>
            <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Zip</th>
                    <th>Latest BMI</th>
                    <th>Latest Weight</th>
                    <th>Image</th>
                    <th>Exam ID</th>
                    <th>ICU Admit</th>
                    <th># ICU Admits</th>
                    <th>Mortality</th>
                </tr>
            </thead>
            <tbody>
                {exams.map((exam) => {
                    return <tr key={exam._id}>
                        <td><Link>{exam.PATIENT_ID}</Link></td>
                        <td>{exam.AGE}</td>
                        <td>{exam.SEX}</td>
                        <td>{exam.ZIP}</td>
                        <td>{exam.LATEST_BMI}</td>
                        {/* having trouble showing these but I think its a naming convention problem */}
                        <td>{exam.LATESTWEIGHT}</td>
                        <td><img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} className="xrayImages"/></td>
                        <td>{exam.exam_Id}</td>
                        {/* having trouble showing these but I think its a naming convention problem */}
                        <td>{exam.ICU_Admit}</td> 
                        <td>{exam.NUM_ICU_admits}</td>
                        <td>{exam.MORTALITY}</td>
                        <td><Link to="#"><button className="tableButton">UPDATE</button></Link></td>
                        <td><Link to="#"><button className="tableButton">DELETE</button></Link></td>
                    </tr>
                })}
            </tbody>
        </Table>
        );
    }
 
export default Admin;