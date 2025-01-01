import React from 'react'
import {BroswerRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
        {/* <Routes>
            <Route path='' />
        </Routes> */}
        <Footer />
    </Router>
  )
}

export default App