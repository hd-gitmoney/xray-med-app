import NavBar from './components/Navbar/Navbar.js';
//import NavBar from './components/NavBar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
//import Admin from './pages/Admin.js';
import XrayForm from './components/Form/xrayForm';
import ExamDetails from './components/ExamDetails/ExamDetails.js';

//import { useApi } from './hooks/use-api';

function App() {
  //const { exams } = useApi();
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/admin" element={<Admin />} /> */}
              <Route path="/examdetails/:id" element={<ExamDetails />} /> 
              {/* TODO */}
              {/* replace path for exam details with examID */}
              <Route path="/newx-ray" element={<XrayForm/>} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
