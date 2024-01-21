import React, { Component} from "react";
import PropTypes from 'prop-types';
import LoginPage from "./Components/LoginPage";
import {BrowserRouter, withRouter} from 'react-router-dom'
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Cntact from "./Components/Cntact";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
          
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Cntact />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
        
        <Footer/>
      </>
    </Router>
  );
}

export default App;
