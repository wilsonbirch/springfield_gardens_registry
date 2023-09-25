import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import NoMatch from './components/noMatch';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
