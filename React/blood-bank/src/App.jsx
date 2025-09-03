import React from 'react';

import NavBar from './Components/NavBar';
// import { Header } from './Components/Header';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import AboutUs  from './Components/AboutUs';
import Home from './Components/Home';
import Doner from './Components/Doner';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/doner' element={<Doner />}> </Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
export default App;


