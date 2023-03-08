import { Link } from "react-router-dom";
import './home.css';

const HomeRows = ({ exam }) => {
  
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
    </tr>
  )
}

export default HomeRows