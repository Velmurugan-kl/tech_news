import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NewsForm from './Components/NewsForm';
import SignIn from './Components/Login';
import SignUp from './Components/Signup';
import Navigation from './Components/Navigation';
import Mycontext from './Components/Mycontext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import AllCardsPage from './Components/AllRev';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [next, setNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Mycontext.Provider value={{ email, setEmail, password, setPassword, next, setNext, isLoading, setIsLoading }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<NewsForm />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-cards" element={<AllCardsPage />} />
        </Routes>
      </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
