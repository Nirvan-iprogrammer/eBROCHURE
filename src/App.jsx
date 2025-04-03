import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Components/Welcome';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
    
      </Routes>
    </Router>
  )
}

export default App
