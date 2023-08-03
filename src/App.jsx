import React from 'react';
import './App.css';
import Header from './Components/Header';
import Introduce from './Components/Introduce';
import Footer from './Components/footer';
import Portfolio from './Components/portfolio';
import AdditionalPassions from './Components/AdditionalPassions';

function App() {
  return (
    <div className="app">
    <Header />
    <Introduce />
    <AdditionalPassions/>
    <Portfolio/>
    <Footer />
    </div>
  )
}

export default App
