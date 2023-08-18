import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from '../store';
import '../styles/main.css';

const Home = lazy(() => import('../pages/Home'));
const Employee = lazy(() => import('../pages/Employee'));

function AppRouter () {
  useEffect(() => {
    store.initStore()
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        } />
        <Route path="/employee" element={
          <Suspense fallback={<>Loading...</>}>
            <Employee />
          </Suspense>
        } />
      </Routes>
    </Router>
  )
}

export default AppRouter
