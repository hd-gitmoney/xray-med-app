import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
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
                <section className="patientInfo examDetails">
                    <h2>Patient Info</h2>
                    <h3>Patient ID:</h3>
                        <p>{exam.PATIENT_ID}</p>
                    <h3>Age:</h3>
                        <p>{exam.AGE}</p>
                    <h3>Sex:</h3>
                        <p>{exam.SEX}</p>
                    <h3>Zip:</h3>
                        <p>{exam.ZIP}</p>
                    <h3>Latest BMI:</h3>
                        <p>{exam.LATEST_BMI}</p>
                    <h3>Latest Weight:</h3>
                        <p>{exam.LATESTWEIGHT}</p>
                    <h3>ICU Admit:</h3>
                        <p>{exam.ICU_Admit}</p>
                    <h3># ICU Admits:</h3>
                        <p>{exam.NUM_ICU_admits}</p>
                    <h3>Mortality:</h3>
                        <p>{exam.MORTALITY}</p>
                </section>
                <section className="examInfo examDetails">
                    <h2>Exam Info</h2>
                        <h3>Exam ID:</h3>
                            <p>{exam.exam_Id}</p>
                        <h3>Image:</h3>
                            <img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} alt="Chest X-Ray"  />
                </section>
            </div>
        </>

    ); 
}

export default ExamDetails;