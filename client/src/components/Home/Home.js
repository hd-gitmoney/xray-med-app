import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import './home.css'
// import Placeholder from 'react-bootstrap/Placeholder';

//TODO

//https://react-bootstrap.github.io/components/placeholder/



const Home = () => {
    const [exams, setExams] = useState(null)
    
    useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch('htt://localhost:9000')
      const json = await response.json()

      if (response.ok) {
        setExams(json)
        console.log(exams)
      }
    }

    fetchExams()
  }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                    {exams.map((exam) => {
                            return <tr key={exam._id}>
                                <td><Link to={`/examdetails/${exam._id}`}>{exam.PATIENT_ID}</Link></td>
                                <td><Link to={`/examdetails/${exam._id}`}>{exam.exam_Id}</Link></td>
                                <td>{exam.AGE}</td>
                                <td>{exam.SEX}</td>
                                <td>{exam.ZIP}</td>
                                <td>{exam.LATEST_BMI}</td>
                                <td>{exam.LATESTWEIGHT}</td>
                                <td><img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} className="xrayImages" alt="Chest X-Ray"/></td>
                                <td>{exam.ICU_Admit}</td> 
                                <td>{exam.NUM_ICU_admits}</td>
                                <td>{exam.MORTALITY}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
         );
    }
 
export default Home;