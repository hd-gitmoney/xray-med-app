import React, { useState, useEffect } from 'react';
import {Button, Form, Col, Container, Row} from 'react-bootstrap';
import Xray from './xray'
import '../App.css'

function XrayForm() {
    const initialValues = {
        patientId: "",
        examId: "",
        keyFindings: "",
        brixiaScore: "",
        age: "",
        sex: "",
        bmi: "",
        zipCode: "",
        isSubmitted: false,
    };

    const [allValues, setAllValues] = useState(initialValues)

    const handleOnchange = (e) => {
        
        setAllValues({...allValues, [e.target.name] : e.target.value});
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(allValues)
        setAllValues({...allValues, [e.target.name] : e.target.value})
        setAllValues({isSubmitted: true})
    }

    useEffect(() => {
        localStorage.setItem('allValues', JSON.stringify(allValues));
      }, [allValues]);

        return (
            <div className="centerform">
                {console.log(allValues)}
                    <Xray allValues={allValues}/> :
                    <Form>
                        <Form.Group controlId="formPatientId">
                            <Form.Label>Patient ID</Form.Label>
                            <Form.Control 
                            value={allValues.patientId}
                            name="patientId" 
                            type="text" 
                            placeholder="Enter Patient ID"
                            onChange={handleOnchange} />
                        </Form.Group> 
                        <Form.Group controlId="formExamId">
                            <Form.Label>Exam ID</Form.Label>
                            <Form.Control 
                            value={allValues.examId}
                            name="examId" 
                            type="text" 
                            placeholder="Enter Exam ID"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formKeyFindngs">
                            <Form.Label>Key Findings</Form.Label>
                            <Form.Control 
                            value={allValues.keyFindings} 
                            name="keyFindings"
                            as="textarea" 
                            rows={2} 
                            placeholder="Enter Key Findings"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formBrixia Score">
                            <Form.Label>Brixia Score</Form.Label>
                            <Form.Control 
                            value={allValues.brixiaScore}
                            name="brixiaScore" 
                            type="text" 
                            placeholder=" Enter Brixia Score"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                            value={allValues.age}
                            name="age" 
                            type="text" 
                            placeholder="Enter Age"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formSex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control 
                            value={allValues.sex}
                            name="sex" 
                            type="text" 
                            placeholder="Enter Sex"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formBmi">
                            <Form.Label>BMI</Form.Label>
                            <Form.Control 
                            value={allValues.bmi}
                            name="bmi" 
                            type="text" 
                            placeholder="Enter BMI"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Form.Group controlId="formZipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                            value={allValues.zipCode}
                            name="zipCode" 
                            type="text" 
                            placeholder="Enter Zip Code"
                            onChange={handleOnchange} />
                        </Form.Group>
                        <Button
                        onClick={handleOnClick} 
                        variant="primary" 
                        type="submit"> 
                        Submit
                        </Button>
                    </Form>
                }
            </div>
        );
}
 
export default XrayForm;