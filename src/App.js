import React from 'react';
import './App.css';
import Page57 from './Pages/Page57';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/page57' element={<Page57/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
