import './App.css';
import Navbar from './components/NavBar'

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  const data = 'patientData.json';

  return (
    
    <div className="App">
      
    
        

      <Navbar/>


      <header className="App-header">
        <p>
          {response}
        </p>
      
      </header>
    </div>
  );
}

export default App;
