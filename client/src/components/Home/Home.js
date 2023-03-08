import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Container, Form, InputGroup } from "react-bootstrap";
import React, { useState } from 'react';
// import Placeholder from 'react-bootstrap/Placeholder';

//TODO

//https://react-bootstrap.github.io/components/placeholder/



const Home = ({exams}) => {
    const [search, setSearch] = useState('')
    return( 
        
                <div>
                <InputGroup>
                <Form.Control
                
                onChange={(e) => setSearch(e.target.value)}
                placeholder = 'search!'
                />
                </InputGroup>
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
                    {exams.filter((exam) => {
                        return search.toLowerCase() === '' ? exam : 
                        exam.AGE.toString().toLowerCase().includes(search) ? exam : 
                        exam.SEX.toString().includes(search) ? exam : 
                        exam.PATIENT_ID.toString().includes(search) ? exam : 
                        exam.ZIP.toString().toLowerCase().includes(search) //? exam : 
                        //exam.LATESTWEIGHT.toString().includes(search)
                        // exam.exam_Id.toString().includes(search) ? exam : 
                        // exam.ICU_Admit.toString().includes(search) ? exam : 
                        // exam.NUM_ICU_admits.toString().includes(search) ? exam : 
                        // exam.MORTALITY.toString().includes(search) ? exam : 
                       
                    }).map((exam) => {
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
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
         );
    }
 
export default Home;