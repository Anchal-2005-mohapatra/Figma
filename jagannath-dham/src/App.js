import React from 'react'
import Home from './Components/Screens/Home';
import Navbar from './Components/Common/Navbar';
import BottomNavabar from './Components/Common/BottomNavabar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <BottomNavabar/>
      <Routes>
       < Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App