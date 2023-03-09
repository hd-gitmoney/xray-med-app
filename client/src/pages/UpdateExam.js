import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';
import {Button, Form, Container } from 'react-bootstrap';
import "../components/Form/form.css"


export const UpdateExam = () => {
    const { exams, dispatch } = useExamsContext();
    const params = useParams();
    const navigate = useNavigate();

    const [foundExam, setFoundExam] = useState()

    const [selectedExam, setSelectedExam] = useState({
        id: params.id,
        PATIENT_ID: '',
        exam_Id: '',
        AGE: '',
        SEX: '',
        ZIP: '',
        LATEST_BMI: '',
        LATESTWEIGHT: '',
        Exam_Id: '',
        ICU_Admit: '',
        NUM_ICU_admits: '',
        MORTALITY: '',
    });

   //creating an object to store the exam with the same ID
    let currentExam = {};
    //iterating through exams to find the one that equals the param.id and store it to currentExam obj
    for(let exam in exams){
       if(params.id === exams[exam]._id){
        currentExam = exams[exam]
       }
    }

    useEffect(() => setFoundExam(currentExam), [])

    const updateExam = async (e) => {
        e.preventDefault()
       
        //iterating through local state
        for(let values in selectedExam){
            //if local state values are empty we want to add the exam we found through params values to it
            if(selectedExam[values] === ''){
                selectedExam[values] = currentExam[values];
            }else{
                //if not empty we will just add that value to the exam we found through params
                currentExam[values] = selectedExam[values]
            }
        }
       
        const response = await fetch(`http://localhost:9000/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(currentExam),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json, "hitting Json")
            if(response.ok){
                dispatch({type: "UPDATE_EXAM", payload: json})
                navigate(`/examdetails/${params.id}`)
            };
        
    }
 

       const handleOnChange = (examKey, newValue) => setSelectedExam({...selectedExam, [examKey]: newValue });
   
    if(!selectedExam || !selectedExam.id){
        return <div>Invalid Exam ID.</div>
    }

    return (
        <>  
            <Container>
            <div className="titleDiv">
                <h1>Exam Details</h1>
                <h2>Edit Form</h2>
            </div>
            <div className="centerform">
                    <Form>
                        <Form.Group controlId="formPatientId">
                            <Form.Label>Patient ID</Form.Label>
                            <Form.Control 
                            name="patientId"
                            type="text"
                            placeholder={`Edit ${currentExam.PATIENT_ID}`}
                            value={selectedExam.PATIENT_ID}
                            onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)} />
                        </Form.Group> 
                        <Form.Group controlId="formExamId">
                            <Form.Label>Exam ID</Form.Label>
                            <Form.Control 
                            name="examId" 
                            type="text"
                            placeholder={`Edit ${currentExam.exam_Id}`} 
                            value={selectedExam.exam_Id}
                            onChange={(e) => handleOnChange("exam_Id", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                            name="age"
                            type="string"
                            placeholder={`Edit ${currentExam.AGE}`}
                            value={selectedExam.AGE}  
                            onChange={(e) => handleOnChange("AGE", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formSex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control 
                            name="sex" 
                            type="text"
                            placeholder={`Edit ${currentExam.SEX}`} 
                            value={selectedExam.SEX} 
                            onChange={(e) => handleOnChange("SEX", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control 
                            name="zip" 
                            type="string"
                            placeholder={`Edit ${currentExam.ZIP}`}
                            value={selectedExam.ZIP} 
                            onChange={(e) => handleOnChange("ZIP", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formLatestBMI">
                            <Form.Label>BMI</Form.Label>
                            <Form.Control 
                            name="latestBMI" 
                            type="string"
                            placeholder={`Edit ${currentExam.LATEST_BMI}`}
                            value={selectedExam.LATEST_BMI} 
                            onChange={(e) => handleOnChange("LATEST_BMI", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formLatestWeight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control 
                            name="weight" 
                            type="string"
                            placeholder={`Edit ${currentExam.LATESTWEIGHT}`}
                            value={selectedExam.LATESTWEIGHT} 
                            onChange={(e) => handleOnChange("LATESTWEIGHT", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formICUAdmit">
                            <Form.Label>ICU Admit</Form.Label>
                            <Form.Control 
                            name="ICU Admit" 
                            type="text"
                            placeholder={`Edit ${currentExam.ICU_Admit}`}
                            maxLength={1}
                            value = {selectedExam.ICU_Admit}
                            onChange={(e) => handleOnChange("ICU_Admit", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formNumICUAdmit">
                            <Form.Label>Number of ICU Admits</Form.Label>
                            <Form.Control 
                            name="numICUAdmits" 
                            type="string"
                            placeholder={`Edit ${currentExam.NUM_ICU_admits}`}
                            value={selectedExam.NUM_ICU_admits} 
                            onChange={(e) => handleOnChange("NUM_ICU_admits", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formMortality">
                            <Form.Label>Mortality</Form.Label>
                            <Form.Control 
                            name="mortality"  
                            type="text"
                            placeholder={`Edit ${currentExam.MORTALITY}`}
                            maxLength={1}
                            value={selectedExam.MORTALITY} 
                            onChange={(e) => handleOnChange("MORTALITY", e.target.value)} />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit"
                            onClick={updateExam}
                            className="formButton"> 
                            Save Information
                        </Button>
                        <Link to={`/examdetails/${params.id}`} >
                            <Button variant="secondary" className="formButton cancelButton">Cancel</Button>
                        </Link>
                    </Form>
                </div>
            </Container>
        </>
    )
}