import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useExamsContext } from '../hooks/useExamsContext';
import HomeRows from '../components/Home/HomeRows';
// import Placeholder from 'react-bootstrap/Placeholder';

//TODO

//https://react-bootstrap.github.io/components/placeholder/



const Home = () => {
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
                            <th>Exam ID</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Zip</th>
                            <th>Latest BMI</th>
                            <th>Latest Weight</th>
                            <th>Image</th>
                            <th>ICU Admit</th>
                            <th># ICU Admits</th>
                            <th>Mortality</th>
                        </tr>
                    </thead>
                    <tbody>
                            {exams && exams.map(exam => (
                                <HomeRows exam={exam} key={exam._id} />))}
                    </tbody>
                </Table>
         );
    }
 
export default Home;