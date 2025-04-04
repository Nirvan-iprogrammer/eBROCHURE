import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Components/WelcomePage/Welcome';
import Layout from './Components/Layout';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/layout' element={<Layout />} />
      </Routes>
    </Router>
  )
}

export default App
