import React from 'react';
import logo from './logo.svg';
import './App.css';
import BotellaConJugo from "./img/botellaconjugo.png"
import Naranja1 from "./img/naranjas.png"
import Header from './components/header/header';
import Firstpage from './components/Firstpage/Firstpage';
import PageFrutilla from './components/PageFrutilla/pagefrutilla';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/frutilla" element={<PageFrutilla />} />
          <Route path="/naranja" element={<Firstpage />} />
          <Route path="/varations" element={""} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
