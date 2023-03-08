import { Link } from "react-router-dom";
import { DELETE } from "../constants/actionTypes";
import { useExamContext } from "../hooks/use-ExamContext";

const ExamItem = ({exam}) => {
    const {dispatch} = useExamContext()

    const handleClick = async () => {
        
        const response = await fetch ('http://localhost:9000/' + exam._id, {
            method: 'DELETE'
        })
        const json = await response.json()
    
        if (response.ok) {
            dispatch({type: DELETE, payload: json})
        }
    }
    
    return (
        <tr>
                        <td><Link to={`/examdetails/${exam._id}`}>{exam.PATIENT_ID}</Link></td>
                        <td>{exam.AGE}</td>
                        <td>{exam.SEX}</td>
                        <td>{exam.ZIP}</td>
                        <td>{exam.LATEST_BMI}</td>
                        <td>{exam.LATESTWEIGHT}</td>
                        <td><img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} className="xrayImages" alt="Chest X-Ray"/></td>
                        <td>{exam.exam_Id}</td>
                        <td>{exam.ICU_Admit}</td> 
                        <td>{exam.NUM_ICU_admits}</td>
                        <td>{exam.MORTALITY}</td>
                        <td><Link to="#"><button  className="tableButton">UPDATE</button></Link></td>
                        <td><Link to="#"><button 
  
  onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Exam?"
    )
    if (confirmBox === true) {
      {handleClick(exam)}
    }
  }} className="tableButton">DELETE</button></Link></td>
                    </tr>
    )
}

export default ExamItem

// onClick={handleClick(exam._id)} 