import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

const App = () => {
  return (
   <>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
     </Routes>
   </>
  )
}

export default App