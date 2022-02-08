import React from 'react';
// importation de la libraire react-router-dom et de ses composants
//pour la facilitation de navigation entre les differentes pages demon site.
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import Projet from './pages/Projet';
import NotFound from './pages/NotFound';
//Utilisation du BrowserRouter qui va contenir les elements du Route.
const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route  path="/"  element={<Home/>} />
            <Route  path="/Application" element={<Application/>} />
            <Route  path="/Projet" element={<Projet/>} />
            <Route  path="/portfolio"  element={<Home/>} />
            <Route  path= "*" element={<NotFound/>} />
         </Routes>
      </BrowserRouter>
     </>
  );
};
export default App;
