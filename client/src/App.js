//import NavBar from './components/NavBar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
//import Admin from './pages/Admin.js';
import XrayForm from './components/Form/xrayForm';
import ExamDetails from './components/ExamDetails/ExamDetails.js';
import { UpdateExam } from './pages/UpdateExam.js';

//import { useApi } from './hooks/use-api';

// const filterPosts = (exams, query) => {
//   if (!query) {
//       return exams;
//   }

//   return exams.filter((exams) => {
//       const postName = exams.AGE.toLowerCase();
//       return postName.includes(query);
//   });
// };


function App() {
  //const { exams } = useApi();

  const [search, setSearch] = useState('')


  return (
    <div className="App">
                {/* <Announcer
                    message={`${filteredPosts.length} posts`}
                />

                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <ul>
                    {filteredPosts.map((exams) => (
                        <li key={exams.id}>{exams.name}</li>
                    ))}
                </ul> */}

       
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/admin" element={<Admin />} /> */}
              <Route path="/examdetails/:id" element={<ExamDetails />} />
              <Route path="/edit/:id" element={<UpdateExam />} />
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
