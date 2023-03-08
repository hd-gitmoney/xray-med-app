// import { useState, useEffect } from 'react';

// const API_ROOT = 'http://localhost:9000';

// export function useApi({ path } = { path: '' }) {
//   const [exams, setExams] = useState([]);

//   const fetchExams = () => {
//     fetch(`${API_ROOT}/${path}`)
//     .then((response) => {
//       return response.json()
//     })
//     .then((examObj) => {
//       setExams(examObj)
//     })
//   }

//   // //    const fetchExams = async () => {
//   //   const response = await fetch(`${API_ROOT}/${path}`)
//   //   const json = await response.json()

//   //   if(response.ok){
//   //     setExams(json)
//   //   }
//   // }

//   useEffect(() => {
//     fetchExams();
//   }, []);

//   return {
//     exams
//   };
// }

//fetches go here?
//export const fetchXRay = (examID) => API_ROOT.get(`/examdetails/${examID}`)
//export const createExam = (newExam) => API_ROOT.post('/', newExam);
//export const updateExam = (examID, updateExam) => API_ROOT.patch(`/examdetails/${examID}`, updatePost); patch replaces some of the data, put replaces all the data
//export const deleteExam = (examID) => API_ROOT.delete(`/examdetails/${examID}`);