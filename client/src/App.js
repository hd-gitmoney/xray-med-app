import Menu from './components/menu.js';
import { Routes, Route} from 'react-router-dom'
import XrayList from './components/xrayList';
import XrayForm from './components/xrayForm';
import Xray from './components/xray.js';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  {console.log(response)}
  return (
    <div className="App">
      <header className="App-header">
          <Menu/>
            <Routes>
              <Route exact path="/" element={<XrayList/>} />
              <Route path="/newx-ray" element={<XrayForm/>} />
              <Route path="/x-ray" element={<Xray/>} />
            </Routes>
      </header>
    </div>
  );
}

export default App;
