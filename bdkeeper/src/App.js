import React from 'react';
// import './App.css';
import MainComponent from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
