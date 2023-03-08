import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
import { useExamContext } from '../../hooks/use-ExamContext';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const API_ROOT = 'http://localhost:9000';


const Admin = () => {
    const [exams, setExams] = useState(null);

    // const fetchExams = () => {
    //   fetch(`${API_ROOT}/${path}`)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((examObj) => {
    //     setExams(examObj)
    //   })
    // }
      const fetchExams = async () => {
      const response = await fetch(`${API_ROOT}`)
      const json = await response.json()
  
      if(response.ok){
        setExams(json)
      }
    }
    useEffect(() => {
      fetchExams();
    }, []);
    // state = {  }
    // fetch and load to payload coming from dispatch instead
    // pull from dispatch to json and send POST request
    // check with Postman program to see all requests
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
            {exams && exams.map((exam) => {
                    return <tr key={exam._id}>
                        <td><Link to={`/examdetails/${exam._id}`}>{exam.PATIENT_ID}</Link></td>
                        <td>{exam.AGE}</td>
                        <td>{exam.SEX}</td>
                        <td>{exam.ZIP}</td>
                        <td>{exam.LATEST_BMI}</td>
                        <td>{exam.LATESTWEIGHT}</td>
                        <td><img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} className="xrayImages" alt="Chest X-Ray"/></td>
                        <td>{exam.exam_Id}</td>
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