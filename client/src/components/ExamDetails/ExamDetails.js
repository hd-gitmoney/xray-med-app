import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';

const ExamDetails = () => {
    //getting the ID from the URL
    const params = useParams()
    const [exam, setExam] = useState([]);
    
    //getting data from API
    useEffect(() => {
        const fetchExam = async () => {
            const response = await fetch(`http://localhost:9000/${params.id}`)
            const json = await response.json()
            if(response.ok){
                setExam(json)
            }
        }
        fetchExam()
    }, [])
    return (
        <>  
            <div className="titleDiv">
                <h1>Exam Details</h1>
            </div>
            <div className="examDetailsBody">
               <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header><h2>Patient Info</h2></Card.Header>
                                <Card.Body>
                                    <div style={{paddingBottom: "25px"}}>
                                        <h3 style={{textAlign: "center"}} >Patient ID:</h3>
                                        <p style={{textAlign: "center"}}>{exam.PATIENT_ID}</p>
                                    </div>
                                    <Row>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}>Age:</h5>
                                            <p style={{textAlign: "center"}}>{exam.AGE}</p>
                                        </Col>
                                        <Col>    
                                            <h5 style={{textAlign: "center"}}>Sex:</h5>
                                            <p style={{textAlign: "center"}}>{exam.SEX}</p>
                                        </Col>
                                        <Col>  
                                            <h5>Zip:</h5>
                                            <p style={{textAlign: "center"}}>{exam.ZIP}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}>Latest BMI:</h5>
                                            <p style={{textAlign: "center"}}>{exam.LATEST_BMI}</p>
                                        </Col>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}>Latest Weight:</h5>
                                            <p style={{textAlign: "center"}}>{exam.LATESTWEIGHT}</p>
                                        </Col>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}>ICU Admit:</h5>
                                            <p style={{textAlign: "center"}}>{exam.ICU_Admit}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}># ICU Admits:</h5>
                                            <p style={{textAlign: "center"}}>{exam.NUM_ICU_admits}</p>
                                        </Col>
                                        <Col>
                                            <h5 style={{textAlign: "center"}}>Mortality:</h5>
                                            <p style={{textAlign: "center"}}>{exam.MORTALITY}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header><h2>Exam Info</h2></Card.Header>
                                <Card.Body>
                                    <div style={{paddingBottom: "25px"}}>
                                        <h3 style={{textAlign: "center"}}>Exam ID:</h3>
                                        <p style={{textAlign: "center"}}>{exam.exam_Id}</p>
                                    </div>
                                    <Card.Img style={{width: "50%", height:"50%", margin:"auto", display:"block"}} variant="top" src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </>
    ); 
}

export default ExamDetails;