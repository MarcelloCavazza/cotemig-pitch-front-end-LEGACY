import React from 'react';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import LogIn from './pages/LogIn.jsx';
import NoPage from './pages/NoPage.jsx';
import SignUp from './pages/SignUp.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<AboutUs />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<LogIn />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
