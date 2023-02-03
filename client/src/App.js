import './App.css';
import Menu from './components/menu.js';

import { useApi } from './hooks/use-api';

function App() {
 {/* const { response } = useApi();*/}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/*{response}*/ }
          <Menu/>
        </p>
      </header>
    </div>
  );
}

export default App;
