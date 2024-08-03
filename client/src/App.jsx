import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import News from './Components/News';
import Navigation from './Components/Navigation';

import './App.css';
import NewsForm from './Components/NewsForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<NewsForm/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
