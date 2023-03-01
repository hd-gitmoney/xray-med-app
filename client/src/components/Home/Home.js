import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
import Examitem from './ExamItem';

// const API_ROOT = 'https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams';

// export function useApi({ path } = { path: '' }) {
//   const [response, setResponse] = useState();

//   useEffect(() => {
//     fetch(`${API_ROOT}/${path}`)
//       .then(res => res.json())
//       .then(res => setResponse(res));
//   }, []);

//   return {
//     response
//   };
// }


//TODO

//https://react-bootstrap.github.io/components/placeholder/
function Home() {
    const [exams, setExams] = useState([]);
// asynchronous call to api to reduce the # of calls needed to fetch array of exam objects
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams');
            const json = await data.json()
            setExams(json.exams);

        }
        fetchData()
            .catch(console.error())
            
        //   fetch('https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams')
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((examObj) => {
        //         setExams(examObj)

        //         console.log(exams);
        //     });
    }, [])

    // state = {  }
    // render() { 
console.log(exams)
// main repo pull for table population
// the exam accessor calls are for the api NOT mongoDB
// this also does not implement the imageURL the same as main
    return (
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
                        <td><Link>{exam.patientId}</Link></td>
                        <td>{exam.age}</td>
                        <td>{exam.sex}</td>
                        <td>{exam.zipCode}</td>
                        <td>{exam.bmi}</td>
                        {/* having trouble showing these but I think its a naming convention problem */}
                        <td>{exam.LATESTWEIGHT}</td>
                        <td><img src={exam.imageURL} className="xrayImages"/></td>
                        <td>{exam.examId}</td>
                        {/* having trouble showing these but I think its a naming convention problem */}
                        <td>{exam.ICU_Admit}</td> 
                        <td>{exam.NUM_ICU_admits}</td>
                        <td>{exam.MORTALITY}</td>
                    </tr>
                })}
            </tbody>
        </Table>

        // <Table striped="columns" bordered hover>

        //     {
        //         exams.map((exam) => {
                    
        //             <Examitem blank={exam} key={exam._id} />


        //         }

        //         )}



        // </Table>
    );
}

export default Home;