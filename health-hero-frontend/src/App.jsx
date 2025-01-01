import React from 'react'  
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='' />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App