import React from 'react';
import './App.css';
import Page57 from './Pages/Page57';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page19 from './Pages/Page19';
import Page20 from './Pages/Page20';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/page57' element={<Page57/>} />
          <Route path='/page19' element={<Page19/>} />
          <Route path='/page20' element={<Page20/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
