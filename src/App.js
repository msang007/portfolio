import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Application from './pages/Application';
import Projet from './pages/Projet';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route exact path="/Application" element={<Application/>} />
            <Route exact path="/Projet" element={<Projet/>} />
            <Route  path= "*" element={<NotFound/>} />
         </Routes>
      </BrowserRouter>
     </>
  );
};

export default App;
