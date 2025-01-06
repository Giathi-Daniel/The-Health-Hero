import React from 'react'  
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<RegistrationForm />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App