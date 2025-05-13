import React from 'react';
import './App.css'
import Header from './header';
import Home from './Home';
import {BrowserRouter, Routes, Route } from "react-router-dom"; // Direcionanmento de uma página para outra.
import Artists from './Artists';
import Artist from './Artist';
import Songs from './Songs';
import Song from './Song';

const App = () => {
  return (
    <>
      <BrowserRouter> {/*Irá gerenciar minhas rotas de uma página para outra.*/}
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/artist/:id" element={<Artist/>}/>
          <Route path="/songs" element={<Songs/>}/>
          <Route path="/song/:id" element={<Song/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
