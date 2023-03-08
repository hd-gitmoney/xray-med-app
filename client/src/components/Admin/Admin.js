import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import './admin.css'
import Placeholder from 'react-bootstrap/Placeholder';
import { useExamContext } from '../../hooks/use-ExamContext';
import { DELETE,UPDATE, CREATE, FETCH_ALL, FETCH_EXAMDETAILS } from '../../constants/actionTypes';
import ExamItem from '../ExamItem';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const API_ROOT = 'http://localhost:9000';

const Admin = () => {
    const {exams, dispatch } = useExamContext()

    
    

    // const fetchExams = () => {
    //   fetch(`${API_ROOT}/${path}`)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((examObj) => {
    //     setExams(examObj)
    //   })
    // }
    useEffect(() => {
        const fetchExams = async () => {
        const response = await fetch(`${API_ROOT}`)
        const json = await response.json()
    
        if (response.ok) {
          dispatch({type: FETCH_ALL, payload: json}) 
        }   
 
      }
      

    fetchExams()
  }, [dispatch]);
    // state = {  }
    // fetch and load to payload coming from dispatch instead
    // pull from dispatch to json and send POST request
    // check with Postman to see all requests
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
            {exams && exams.map((exam) => (
                    <ExamItem key={exam._id} exam = {exam}/>
                ))}
            </tbody>
        </Table>
        );
    }
 
export default Admin;