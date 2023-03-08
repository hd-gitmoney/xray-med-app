import { useEffect } from 'react';
import AdminRows from '../components/Admin/AdminRows';
import Table from 'react-bootstrap/Table';
import { useExamsContext } from '../hooks/useExamsContext';
// import Placeholder from 'react-bootstrap/Placeholder';
//TODO
//https://react-bootstrap.github.io/components/placeholder/

const Admin = () => {

    const { exams, dispatch } = useExamsContext()
    
    useEffect(() => {
        const fetchExams = async () => {
          const response = await fetch('http://localhost:9000/')
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_EXAMS', payload: json})
          }
        }
    
        fetchExams()
      }, [dispatch])

    return(
        <Table striped="columns" bordered hover>
            <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Zip</th>
                    <th>Latest BMI</th>
                    <th>Latest Weight</th>
                    <th>Image</th>
                    <th>Exam ID</th>
                    <th>ICU Admit</th>
                    <th># ICU Admits</th>
                    <th>Mortality</th>
                </tr>
            </thead>
            <tbody>
            {exams && exams.map(exam => (
                    <AdminRows exam={exam} key={exam._id} />))}
            </tbody>
        </Table>
        );
    }
export default Admin;