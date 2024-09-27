 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Postula from './Postula';
import Votar from './Votar';
import Ganadoras from './Ganadoras';
import { MetroSpinner } from "react-spinners-kit";



import React, {  useContext } from 'react';


import {LoadingContext, LoadingProvider } from './components/LoadingContext';



const App = () => {
  //const { loading } = useContext(LoaderContext);  // Usa el contexto para el estado de carga
  const { loading, setLoading } = useContext(LoadingContext);

  return (<LoadingProvider>

        { loading && (
          <div className="loading_full">
            {loading && <MetroSpinner size={90} color="#F0000C" />}
          </div>
        )}
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postulacion" element={<Postula />} />
        <Route path="/votacion" element={<Votar />} />
        <Route path="/jurado" element={<Votar votar={false} />} />
        <Route path="/ganadoras" element={<Ganadoras />} />
      </Routes>
    </BrowserRouter>
    </LoadingProvider>
  );
};

export default App;
