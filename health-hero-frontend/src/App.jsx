import React from 'react'  
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App