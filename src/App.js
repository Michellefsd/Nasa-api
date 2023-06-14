import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, R, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserNews from './components/UserNews';


function App() {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/selected-news" element={ <UserNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
