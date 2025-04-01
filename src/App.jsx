import React from 'react'
<Route path="/about" element={<About />} />
import { Homepage, About, Gallery,Services,Contact } from "./pages/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
const App = () => {
  return (
    <Router>
      <div className="App bg-black">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;
