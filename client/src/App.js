import NavBar from './components/Navbar/Navbar.js';
//import NavBar from './components/NavBar.js';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin.js';
import XrayForm from './components/xrayForm';
import ExamDetails from './components/ExamDetails/ExamDetails.js';
import { ExamContextProvider } from './context/ExamContext.js';

import { useApi } from './hooks/use-api';

function App() {
  const { exams } = useApi();

  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
            <Routes>
              <Route exact path="/" element={
              <ExamContextProvider>
              <Home exams={exams} />
              </ExamContextProvider>
              } />
              <Route path="/admin" element={<Admin exams={exams} />} />
              <Route path="/examdetails" element={<ExamDetails />} /> 
              {/* TODO */}
              {/* replace path for exam details with examID */}
              <Route path="/newx-ray" element={<XrayForm/>} />
            </Routes>
      </header>
    </div>
  );
  
}

export default App;
