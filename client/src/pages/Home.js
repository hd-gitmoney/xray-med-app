import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useExamsContext } from '../hooks/useExamsContext';
import HomeRows from '../components/Home/HomeRows';
import { Form, InputGroup } from "react-bootstrap";
// import Placeholder from 'react-bootstrap/Placeholder';

//TODO

//https://react-bootstrap.github.io/components/placeholder/



const Home = () => {
    const [search, setSearch] = useState('')
    const { exams, dispatch } = useExamsContext()

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch('http://localhost:9000')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EXAMS', payload: json})
      }
    }

    fetchExams()
  }, [dispatch])


    return(
      <div>
        <div className="searchBar" >
          <InputGroup  size="lg" >
              <InputGroup.Text id="inputGroup-sizing-lg">Search:</InputGroup.Text>
              <Form.Control
              
              onChange={(e) => setSearch(e.target.value)}
              />
          </InputGroup>
        </div>
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
                            {exams && exams.filter((exam) => {
                                return search.toLowerCase() === '' ? exam : 
                                exam.AGE.toString().toLowerCase().includes(search) ? exam : 
                                exam.SEX.toString().includes(search) ? exam : 
                                exam.PATIENT_ID.toString().includes(search) ? exam : 
                                exam.ZIP.toString().toLowerCase().includes(search) //? exam : 
                                //exam.LATESTWEIGHT.toString().includes(search)
                                // exam.exam_Id.toString().includes(search) ? exam : 
                                // exam.ICU_Admit.toString().includes(search) ? exam : 
                                // exam.NUM_ICU_admits.toString().includes(search) ? exam : 
                                // exam.MORTALITY.toString().includes(search) ? exam : 
                       
                            }).map(exam => (
                                <HomeRows exam={exam} key={exam._id} />))}
                    </tbody>
                </Table>
                </div>
         );
    }
 
export default Home;