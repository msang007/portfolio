import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import Projet from './pages/Projet';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route  path="/"  element={<Home/>} />
            <Route  path="/Application" element={<Application/>} />
            <Route  path="/Projet" element={<Projet/>} />
         </Routes>
      </BrowserRouter>
     </>
  );
};

export default App;
