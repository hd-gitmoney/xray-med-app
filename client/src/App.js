import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
<<<<<<< Updated upstream

=======
  // {console.log(response)}
>>>>>>> Stashed changes
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
