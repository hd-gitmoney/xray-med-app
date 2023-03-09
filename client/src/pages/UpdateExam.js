import React, { useState, useEffect } from 'react';
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
        //Png_filename('COVID-19-AR-16434358_XR_CHEST_AP_PORTABLE_4.png')
    });

   //creating an object to store the exam with the same ID
    let currentExam = {};
    //iterating through exams to find the one that equals the URL ID and storing it to currentExam obj
    for(let exam in exams){
       if(params.id === exams[exam]._id){
        currentExam = exams[exam]
       }
    }

    useEffect(() => setFoundExam(currentExam), [])

    const updateExam = async (e) => {
        e.preventDefault()
        //seting local state equal to currentExam
        currentExam = selectedExam;
       
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
            {/* <div className="titleDiv">
                <h1>Edit Exam Details</h1>
            </div>
            <form>
            <div className="examDetailsBody">
                <section className="patientInfo examDetails">
                    <h2>Patient Info</h2>
                    <label>Patient ID:</label>
                        <input 
                        value = {selectedExam.PATIENT_ID}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="text" />
                    <label>Age:</label>
                        <input 
                        value = {selectedExam.AGE}
                        onChange={(e) => handleOnChange("AGE", e.target.value)}
                        type="number" />
                    <label>Sex:</label>
                        <input 
                        value = {selectedExam.SEX}
                        onChange={(e) => handleOnChange("SEX", e.target.value)}
                        type="text" />
                    <label>Zip:</label>
                        <input 
                        value = {selectedExam.ZIP}
                        onChange={(e) => handleOnChange("ZIP", e.target.value)}
                        type="number" />
                    <label>Latest BMI:</label>
                        <input 
                        value = {selectedExam.LATEST_BMI}
                        onChange={(e) => handleOnChange("LATEST_BMI", e.target.value)}
                        type="number" />
                    <label>Latest Weight:</label>
                        <input 
                        value = {selectedExam.LATESTWEIGHT}
                        onChange={(e) => handleOnChange("LATESTWEIGHT", e.target.value)}
                        type="number" />
                    <label>ICU Admit:</label>
                        <input 
                        value = {selectedExam.ICU_Admit}
                        onChange={(e) => handleOnChange("ICU_Admit", e.target.value)}
                        type="text" />
                    <label>Number of ICU Admits:</label>
                        <input 
                        value = {selectedExam.NUM_ICU_admits}
                        onChange={(e) => handleOnChange("NUM_ICU_admits", e.target.value)}
                        type="number" />
                    <label>Mortality:</label>
                        <input 
                        value = {selectedExam.MORTALITY}
                        onChange={(e) => handleOnChange("MORTALITY", e.target.value)}
                        type="text" />
                </section>
                <section className="examInfo examDetails">
                    <h2>Exam Info</h2>
                        <label>Exam ID:</label>
                            <input 
                            value = {selectedExam.exam_Id}
                            onChange={(e) => handleOnChange("exam_Id", e.target.value)}
                            type="text" />
                        <h3>Image:</h3>
                            <img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${params.png_filename}`} alt="Chest X-Ray"  />
                </section>
                <button onClick={updateExam}>Save Information</button>
                <Link to="/" className='cancelButton'>Cancel</Link>
            </div>
            </form> */}
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
                            value={selectedExam.PATIENT_ID}
                            onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)} />
                        </Form.Group> 
                        <Form.Group controlId="formExamId">
                            <Form.Label>Exam ID</Form.Label>
                            <Form.Control 
                            name="examId" 
                            type="text" 
                            value={selectedExam.exam_Id}
                            onChange={(e) => handleOnChange("exam_Id", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                            name="age"
                            type="string"
                            value={selectedExam.AGE}  
                            onChange={(e) => handleOnChange("AGE", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formSex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control 
                            name="sex" 
                            type="text" 
                            value={selectedExam.SEX} 
                            onChange={(e) => handleOnChange("SEX", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control 
                            name="zip" 
                            type="string"
                            value={selectedExam.ZIP} 
                            onChange={(e) => handleOnChange("ZIP", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formLatestBMI">
                            <Form.Label>BMI</Form.Label>
                            <Form.Control 
                            name="latestBMI" 
                            type="string"
                            value={selectedExam.LATEST_BMI} 
                            onChange={(e) => handleOnChange("LATEST_BMI", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formLatestWeight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control 
                            name="weight" 
                            type="string" 
                            value={selectedExam.LATESTWEIGHT} 
                            onChange={(e) => handleOnChange("LATESTWEIGHT", e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formICUAdmit">
                            <Form.Label>ICU Admit</Form.Label>
                            <Form.Control 
                            name="ICU Admit" 
                            type="text" 
                            maxLength={1}
                            value = {selectedExam.ICU_Admit}
                            onChange={(e) => handleOnChange("ICU_Admit", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formNumICUAdmit">
                            <Form.Label>Number of ICU Admits</Form.Label>
                            <Form.Control 
                            name="numICUAdmits" 
                            type="string"
                            value={selectedExam.NUM_ICU_admits} 
                            onChange={(e) => handleOnChange("NUM_ICU_admits", e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formMortality">
                            <Form.Label>Mortality</Form.Label>
                            <Form.Control 
                            name="mortality"  
                            type="text" 
                            maxLength={1}
                            value={selectedExam.MORTALITY} 
                            onChange={(e) => handleOnChange("MORTALITY", e.target.value)} />
                        </Form.Group>
                        {/* <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                            name="pngFilename" 
                            type="text" 
                            placeholder="Enter Image Address"
                            onChange={(e) => setPng_filename(e.target.value)}
                            value={png_filename} />
                        </Form.Group> */}

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