import { Link } from "react-router-dom";
import { useExamsContext } from "../../hooks/useExamsContext";
import './homeRows.css';

const HomeRows = ({ exam }) => {
  const { dispatch } = useExamsContext()
    
    const handleClick = async () => {
        const response = await fetch(`https://xray-api-backend.onrender.com/${exam._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if(response.ok){
            dispatch({type: 'DELETE_EXAM', payload: json })
        }
    }
  return (
    <tr>
          <td><Link to={`/examdetails/${exam._id}`}>{exam.PATIENT_ID}</Link></td>
          <td><Link to={`/examdetails/${exam._id}`}>{exam.exam_Id}</Link></td>
          <td>{exam.AGE}</td>
          <td>{exam.SEX}</td>
          <td>{exam.ZIP}</td>
          <td>{exam.LATEST_BMI}</td>
          <td>{exam.LATESTWEIGHT}</td>
          <td><img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.png_filename}`} className="xrayImages" alt="Chest X-Ray"/></td>
          <td>{exam.ICU_Admit}</td> 
          <td>{exam.NUM_ICU_admits}</td>
          <td>{exam.MORTALITY}</td>
          <td><Link to={`/edit/${exam._id}`}><button className="tableButton">UPDATE</button></Link></td>
          <td><button onClick={handleClick} className="tableButton">DELETE</button></td>
    </tr>
  )
}

export default HomeRows