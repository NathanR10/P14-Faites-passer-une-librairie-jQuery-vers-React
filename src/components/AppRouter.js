import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Employee from '../pages/Employee'

function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Employee />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
