import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const Admin = () => {
    // state = {  } 
    // render() { 
    return(
        <Table striped="columns" bordered hover>
            <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Exam ID</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Zip</th>
                    <th>Latest BMI</th>
                    <th>Latest Weight</th>
                    <th>Image</th>
                    <th>ICU Admit</th>
                    <th># ICU Admits</th>
                    <th>Mortality</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>COVID-19-AR-16434409</td>
                    <td><Link to="/examdetails">Exam-1</Link></td>
                    <td>51</td>
                    <td>M</td>
                    <td>721</td>
                    <td>37.7</td>
                    <td>207</td>
                    <td>COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png</td>
                    <td>N</td>
                    <td>0</td>
                    <td>N</td>
                    <td>Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.</td>
                    <td><Link to="#"><button className="tableButton">UPDATE</button></Link></td>
                    <td><Link to="#"><button className="tableButton">DELETE</button></Link></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><Link to="#"><button className="tableButton">UPDATE</button></Link></td>
                    <td><Link to="#"><button className="tableButton">DELETE</button></Link></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><Link to="#"><button className="tableButton">UPDATE</button></Link></td>
                    <td><Link to="#"><button className="tableButton">DELETE</button></Link></td>
                </tr>
            </tbody>
        </Table>
        );
    }
 
export default Admin;