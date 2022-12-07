import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SPA from './components/SPA';

const App =()=> {

  return (
   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SPA/> } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;