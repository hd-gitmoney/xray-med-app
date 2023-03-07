import NavBar from './components/Navbar/Navbar.js';
//import NavBar from './components/NavBar.js';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin.js';
import XrayForm from './components/xrayForm';
import ExamDetails from './components/ExamDetails/ExamDetails.js';

import { useState } from 'react';

import { useApi } from './hooks/use-api';

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
  const { exams } = useApi();

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
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Home exams={exams} />} />
              <Route path="/admin" element={<Admin exams={exams} />} />
              <Route path="/examdetails/:id" element={<ExamDetails />} /> 
              {/* TODO */}
              {/* replace path for exam details with examID */}
              <Route path="/newx-ray" element={<XrayForm/>} />
            </Routes>
      </header>
    </div>
  );
}

export default App;
