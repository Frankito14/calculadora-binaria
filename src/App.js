import logo from './logo.svg';
import './App.css';
import "./components/styles/bootstrap.min.css";
import Navigator from './components/Navigator';
import DecimalToBinary from './components/DecimalToBinary';
import CalculadoraBinarioADecimal from './components/CalculadoraBinarioADecimal';
import Menu from './components/menu';
import CalculadoraC1 from './components/CalculadoraC1';
import CalculadoraSumaBinaria from './components/CalculadoraSumaBinarios';
import { useState } from 'react';
import MostradorCalculadora from './components/MostradorCalculadora';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SumarBinarios } from './components/functions/FuncionesSumaBinarios';
import Footer from './components/footer';
import CalculadoraDecimalBaseN from './components/CalculadoraDecimalBaseN';
import { CalcularCapacidadAncho } from './components/functions/FuncionesCapacidad';
import CalculadoraCapacidad from './components/CalculadoraCapacidadBits';

function App() {

  const [calculadora, setCalculadora] = useState("Decimal-Binario");

  return (
    
   
    <div className="App">
       <BrowserRouter>
        <Navigator></Navigator>
        <Menu></Menu>
        <Routes>
          <Route path='/DecimalBinario' element={<DecimalToBinary></DecimalToBinary>}></Route>
          <Route path='/BinarioDecimal' element={<CalculadoraBinarioADecimal></CalculadoraBinarioADecimal>}></Route>
          <Route path='/ComplementoC2' element={<CalculadoraC1></CalculadoraC1>}></Route>
          <Route path='/SumaBinarios' element={<CalculadoraSumaBinaria></CalculadoraSumaBinaria>}></Route>
          <Route path='/CapacidadRepresentacion' element={<CalculadoraCapacidad></CalculadoraCapacidad>}></Route>
          <Route path='*' element={<MostradorCalculadora></MostradorCalculadora>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
