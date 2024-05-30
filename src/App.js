 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Postula from './Postula';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postula" element={<Postula />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
