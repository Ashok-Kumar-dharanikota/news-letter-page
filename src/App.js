import './App.css';
import SubscribePage from './Pages/SubscribePage';
import SuccessPage from './Pages/SuccessPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SubscribePage />} />
        <Route path="/success" element={<SuccessPage />} />

      </Routes>
      
    </div>
  );
}

export default App;
