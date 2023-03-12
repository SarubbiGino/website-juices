import React from 'react';
import logo from './logo.svg';
import './App.css';
import BotellaConJugo from "./img/botellaconjugo.png"
import Naranja1 from "./img/naranjas.png"
import Header from './components/header/header';
import Firstpage from './components/Firstpage/Firstpage';

function App() {
  return (
    <div className="App">
       <Header />
       <Firstpage />
    </div>
  );
}

export default App;
