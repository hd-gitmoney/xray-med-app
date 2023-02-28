import React, { Component, useEffect, useState} from 'react';
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

    useEffect(() => {
      fetch("https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams")
        .then(response => response.json())
        .then(response => {
            setExams(response);
            console.log(`EXAMS: ${exams}`);

        });
    }, [])
    // state = {  }
// render() { 
    return(
        <Table striped="columns" bordered hover>
 
                {
              exams.map(exam => (
                <Examitem exam={exam} key={exam._id} />
              ))}

        </Table>
    )}
 
    export default Home;