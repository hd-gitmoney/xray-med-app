// import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
import { useExamContext } from "../../hooks/use-ExamContext";
import { FETCH_ALL } from "../../constants/actionTypes";
import React, {  useEffect, useState } from 'react';

const API_ROOT = 'http://localhost:9000';

//TODO

//https://react-bootstrap.github.io/components/placeholder/



const Home = ({exams}) => {
    const {exam, dispatch } = useExamContext()



  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch(`${API_ROOT}`)
      const json = await response.json()
  
      if (response.ok) {
        dispatch({type: FETCH_ALL, payload: json}) 
      }   
    }
  

  // //    const fetchExams = async () => {
  //   const response = await fetch(`${API_ROOT}/${path}`)
  //   const json = await response.json()

  //   if(response.ok){
  //     setExams(json)
  //   }
  // }
  // Old Version, without context
  // Const Home = () => {
  //   const [exams, setExams] = useState([]);

  //   // const fetchExams = () => {
  //   //   fetch(`${API_ROOT}/${path}`)
  //   //   .then((response) => {
  //   //     return response.json()
  //   //   })
  //   //   .then((examObj) => {
  //   //     setExams(examObj)
  //   //   })
  //   // }
  //     const fetchExams = async () => {
  //     const response = await fetch(`${API_ROOT}`)
  //     const json = await response.json()
  
  //     if(response.ok){
  //       setExams(json)
  //     }
  //   }
  //   useEffect(() => {
  //     fetchExams();
  //   }, []);
 
    fetchExams()
  }, [dispatch]);

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
                    </tr>
                })}
            </tbody>
        </Table>
        );
    }
 
export default Home;