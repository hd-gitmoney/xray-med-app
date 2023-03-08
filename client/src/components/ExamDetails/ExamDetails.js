import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import './examDetails.css'

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
                <Link to={`/edit/${params.id}`}><button className="editButton">Edit Employee</button></Link>
            </div>
            <div className="examDetailsBody">
               <Container>
                    <Row>
                        <Col className="flexColumnCard">
                            <Card className="flexCard">
                                <Card.Header><h2>Patient Info</h2></Card.Header>
                                <Card.Body className="bodyStyle">
                                    <div className="bottomPattingToDiv">
                                        <h3>Patient ID:</h3>
                                        <p >{exam.PATIENT_ID}</p>
                                    </div>
                                    <Row>
                                        <Col>
                                            <h5 >Age:</h5>
                                            <p>{exam.AGE}</p>
                                        </Col>
                                        <Col>    
                                            <h5 >Sex:</h5>
                                            <p >{exam.SEX}</p>
                                        </Col>
                                        <Col>  
                                            <h5>Zip:</h5>
                                            <p >{exam.ZIP}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 >Latest BMI:</h5>
                                            <p >{exam.LATEST_BMI}</p>
                                        </Col>
                                        <Col>
                                            <h5 >Latest Weight:</h5>
                                            <p>{exam.LATESTWEIGHT}</p>
                                        </Col>
                                        <Col>
                                            <h5 >ICU Admit:</h5>
                                            <p >{exam.ICU_Admit}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 ># ICU Admits:</h5>
                                            <p>{exam.NUM_ICU_admits}</p>
                                        </Col>
                                        <Col>
                                            <h5 >Mortality:</h5>
                                            <p >{exam.MORTALITY}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="flexColumnCard">
                            <Card className="flexCard">
                                <Card.Header><h2>Exam Info</h2></Card.Header>
                                <Card.Body className="bodyStyle">
                                    <div className="bottomPattingToDiv">
                                        <h3>Exam ID:</h3>
                                        <p>{exam.exam_Id}</p>
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