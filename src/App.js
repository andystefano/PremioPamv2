 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Postula from './Postula';
import Votar from './Votar';
import Ganadoras from './Ganadoras';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postulacion" element={<Postula />} />
        <Route path="/votacion" element={<Votar />} />
        <Route path="/ganadoras" element={<Ganadoras />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
