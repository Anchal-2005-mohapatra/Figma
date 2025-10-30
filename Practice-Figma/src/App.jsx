import React from 'react'
import Home from './Screens/HomeCompoent/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Screens/Common/Navbar';
import Sidebar from './Screens/HomeCompoent/sidebar';
import HeroSection from './Screens/HomeCompoent/HeroSection';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/hero' element={<HeroSection/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;