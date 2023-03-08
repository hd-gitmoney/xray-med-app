import Table from 'react-bootstrap/Table';
import './admin.css'
import { Link } from 'react-router-dom';
import { useExamsContext } from '../../hooks/useExamsContext';
// import Placeholder from 'react-bootstrap/Placeholder';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const AdminRows = ({exam}) => {

    const { dispatch } = useExamsContext()
    
    const handleClick = async () => {
        const response = await fetch(`http//localhost:9000/${exam._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if(response.ok){
            dispatch({type: 'DELETE_EXAM', payload: json })
        }
    }

    return(
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
            <td><button className="tableButton">UPDATE</button></td>
            <td><button onClick={handleClick} className="tableButton">DELETE</button></td>
        </tr>
        )
    }
 
export default AdminRows;