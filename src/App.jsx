import React from 'react'  
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='' />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App