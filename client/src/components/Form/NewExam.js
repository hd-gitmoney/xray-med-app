import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './form.css'

const NewExam = () => {

    const [PATIENT_ID, setPATIENT_ID] = useState('');
    const [exam_Id, setExam_Id] = useState('');
    const [AGE, setAGE] = useState('');
    const [SEX, setSEX] = useState('');
    const [ZIP, setZIP] = useState('');
    const [LATEST_BMI, setLATEST_BMI] = useState('');
    const [LATESTWEIGHT, setLATESTWEIGHT] = useState('');
    const [ICU_Admit, setICU_Admit] = useState('');
    const [NUM_ICU_admits, setNUM_ICU_admits] = useState('');
    const [MORTALITY, setMORTALITY] = useState('')
    const [png_filename, setPng_filename] = useState('COVID-19-AR-16434358_XR_CHEST_AP_PORTABLE_4.png');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const exam = { PATIENT_ID, AGE, SEX, ZIP, LATEST_BMI,LATESTWEIGHT, png_filename, exam_Id, ICU_Admit, NUM_ICU_admits, MORTALITY }

        const response = await fetch('https://xray-api-backend.onrender.com/', {
            method: 'POST',
            body: JSON.stringify(exam),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)

        if(!response.ok){
            setError(json.error)
            console.log(error)
        }
        if(response.ok){
            setPATIENT_ID('')
            setAGE('')
            setSEX('')
            setZIP('')
            setLATEST_BMI('')
            setLATESTWEIGHT('')
            setPng_filename('COVID-19-AR-16434358_XR_CHEST_AP_PORTABLE_4.png')
            setExam_Id('')
            setICU_Admit('')
            setNUM_ICU_admits('')
            setMORTALITY('')
            setError(null)
            console.log("New Exam Added:", json)
            navigate('/')
        }
    }


        return (
            <div className="centerform">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPatientId">
                            <Form.Label>Patient ID</Form.Label>
                            <Form.Control 
                            name="patientId" 
                            type="text" 
                            placeholder="Enter Patient ID"
                            onChange={(e) => setPATIENT_ID(e.target.value)}
                            value={PATIENT_ID} />
                        </Form.Group> 
                        {/* TODO */}
                        {/* EXAM_ID MIGHT NEED TO BE GENERATED BY BD? */}
                        <Form.Group controlId="formExamId">
                            <Form.Label>Exam ID</Form.Label>
                            <Form.Control 
                            name="examId" 
                            type="text" 
                            placeholder="Enter Exam ID"
                            onChange={(e) => setExam_Id(e.target.value)} 
                            value={exam_Id}/>
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                            name="age"
                            type="text"
                            placeholder="Enter Age"
                            onChange={(e) => setAGE(e.target.value)}
                            value={AGE}  />
                        </Form.Group>
                        <Form.Group controlId="formSex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control 
                            name="sex" 
                            type="text" 
                            placeholder="Enter Sex"
                            onChange={(e) => setSEX(e.target.value)}
                            value={SEX} />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control 
                            name="zip" 
                            type="text" 
                            placeholder="Enter Zip"
                            onChange={(e) => setZIP(e.target.value)}
                            value={ZIP} />
                        </Form.Group>
                        <Form.Group controlId="formLatestBMI">
                            <Form.Label>BMI</Form.Label>
                            <Form.Control 
                            name="latestBMI" 
                            type="text" 
                            placeholder="Enter Latest BMI"
                            onChange={(e) => setLATEST_BMI(e.target.value)}
                            value={LATEST_BMI} />
                        </Form.Group>
                        <Form.Group controlId="formLatestWeight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control 
                            name="weight" 
                            type="text" 
                            placeholder="Enter Latest Weight"
                            onChange={(e) => setLATESTWEIGHT(e.target.value)}
                            value={LATESTWEIGHT} />
                        </Form.Group>
                        <Form.Group controlId="formICUAdmit">
                            <Form.Label>ICU Admit</Form.Label>
                            <Form.Control 
                            name="ICU Admit" 
                            type="text" 
                            placeholder="Enter Y/N"
                            maxLength={1}
                            onChange={(e) => setICU_Admit(e.target.value)}
                            value={ICU_Admit} />
                        </Form.Group>
                        <Form.Group controlId="formNumICUAdmit">
                            <Form.Label>Number of ICU Admits</Form.Label>
                            <Form.Control 
                            name="numICUAdmits" 
                            type="text" 
                            placeholder="Enter Number of ICU Admits"
                            onChange={(e) => setNUM_ICU_admits(e.target.value)}
                            value={NUM_ICU_admits} />
                        </Form.Group>
                        <Form.Group controlId="formMortality">
                            <Form.Label>Mortality</Form.Label>
                            <Form.Control 
                            name="mortality"  
                            type="text" 
                            placeholder="Enter Y/N"
                            maxLength={1}
                            onChange={(e) => setMORTALITY(e.target.value)}
                            value={MORTALITY} />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                            name="pngFilename" 
                            type="text" 
                            placeholder="Enter Image Address"
                            onChange={(e) => setPng_filename(e.target.value)}
                            value={png_filename} />
                        </Form.Group>
                        

                        <Button 
                        variant="primary" 
                        type="submit"
                        className="formButton"> 
                        Submit
                        </Button>
                        {error && <Alert variant='danger' className="formError">{error}</Alert>}
                    </Form>
            </div>
        );
}

export default NewExam;