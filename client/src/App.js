import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import NewExam from './components/Form/NewExam';
import ExamDetails from './components/ExamDetails/ExamDetails.js';
import { UpdateExam } from './pages/UpdateExam.js';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/examdetails/:id" element={<ExamDetails />} />
              <Route path="/edit/:id" element={<UpdateExam />} />
              <Route path="/form" element={<NewExam />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
