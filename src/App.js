import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <AllRoutes />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
