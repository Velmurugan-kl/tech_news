import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsForm from './Components/NewsForm';
import SignIn from './Components/Login';
import SignUp from './Components/Signup';
import Navigation from './Components/Navigation';
import Mycontext from './Components/Mycontext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import AllCardsPage from './Components/AllRev';
import Footer from './Components/Footer';
import HomeContent from './Components/HomeContent';
import AboutUs from './Components/AboutUs';
import AllNewsPage from './Components/AllNews';
import ContactUs from './Components/ContactUs';
import ScrollToTop from './Components/ScrollUp';
import ReviewForm from './Components/ReviewForm';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [next, setNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loged')));

  return (
    <Mycontext.Provider value={{ email, setEmail, password, setPassword, next, setNext, isLoading, setIsLoading, isLoggedIn,setIsLoggedIn }}>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Navigation/>}>
          <Route index element={<HomeContent />} />
          <Route path="/edit" element={<NewsForm />} />
          <Route path="/all-cards" element={<AllCardsPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/review-edit" element={<ReviewForm/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Mycontext.Provider>
  );
}


export default App;
