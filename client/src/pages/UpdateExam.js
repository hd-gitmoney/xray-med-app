import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useExamsContext } from '../hooks/useExamsContext';

export const UpdateExam = (route) => {
    const { exams, dispatch } = useExamsContext();
    const params = useParams();
    const navigate = useNavigate();

    const [selectedExam, setSelectedExam] = useState({
        id: null,
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

    const currentExamId = route.match.params.id;
    //const currentExamId = params.id;

    useEffect(() => {
        const examId = currentExamId;
        const selectedExam = exams.find(
        (currentExamTraversal) => currentExamTraversal.id === parseInt(examId)
        );

        setSelectedExam(selectedExam);
    }, [currentExamId, exams]);

    const onSubmit = (e) => {
        e.preventDefault();

        //payload might be wrong HERE
        dispatch({type: 'UPDATE_EXAM', payload: exams});
        navigate(`/examdetails/${currentExamId}`);
    }

    const handleOnChange = (examKey, newValue) => setSelectedExam({...selectedExam, [examKey]: newValue });

    if(!selectedExam || !selectedExam.id){
        return <div>Invalid Exam ID.</div>
    }

    return (
        <>  
            <div className="titleDiv">
                <h1>Edit Exam Details</h1>
            </div>
            <form onSubmit={onSubmit}>
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
                        value = {selectedExam.PATIENT_ID}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="text" />
                    <label>Zip:</label>
                        <input 
                        value = {selectedExam.ZIP}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="number" />
                    <label>Latest BMI:</label>
                        <input 
                        value = {selectedExam.LATEST_BMI}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="number" />
                    <label>Latest Weight:</label>
                        <input 
                        value = {selectedExam.LATESTWEIGHT}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="number" />
                    <label>ICU Admit:</label>
                        <input 
                        value = {selectedExam.ICU_Admit}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="text" />
                    <label>Number of ICU Admits:</label>
                        <input 
                        value = {selectedExam.NUM_ICU_admits}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="number" />
                    <label>Mortality:</label>
                        <input 
                        value = {selectedExam.MORTALITY}
                        onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                        type="text" />
                </section>
                <section className="examInfo examDetails">
                    <h2>Exam Info</h2>
                        <label>Exam ID:</label>
                            <input 
                            value = {selectedExam.exam_Id}
                            onChange={(e) => handleOnChange("PATIENT_ID", e.target.value)}
                            type="text" />
                        <h3>Image:</h3>
                            <img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${params.png_filename}`} alt="Chest X-Ray"  />
                </section>
                <button>Save Information</button>
                <Link to="/" className='cancelButton'>Cancel</Link>
            </div>
            </form>
        </>
    )
}