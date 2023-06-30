import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('../pages/Home'));
const Employee = lazy(() => import('../pages/Employee'));

function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        } />
        <Route path="/" element={
          <Suspense fallback={<>Loading...</>}>
            <Employee />
          </Suspense>
        } />
      </Routes>
      
    </Router>
  )
}

export default AppRouter
