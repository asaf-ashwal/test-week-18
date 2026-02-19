import React from 'react'
import { Route, Routes, } from 'react-router';
import System from './pages/System/index'
import Quiz from './pages/Quiz/index'

function Router() {
   
  return (
    <Routes>
        <Route path="/" element={<System />}/>
        <Route path="/Quiz" element={<Quiz />}/>
    </Routes>
  )
}

export default Router