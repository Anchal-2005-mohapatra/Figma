import React from 'react'
import Navbar from './Components/Common/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/HomeComponent/Home'
import Paypal from './Components/HomeComponent/Paypal'
import Secure from './Components/HomeComponent/Secure'  
import Money from './Components/HomeComponent/Money'
import Review from './Components/HomeComponent/Review'
import FrequentlyAskQ from './Components/HomeComponent/FrequentlyAskQ'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path ='/paypal' element={<Paypal />}></Route>
          <Route path ='/secure' element={<Secure />}></Route>
          <Route path ='/money' element={<Money />}></Route>
          <Route path ='/review' element={<Review />}></Route>
          <Route path ='/faq' element={<FrequentlyAskQ />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App