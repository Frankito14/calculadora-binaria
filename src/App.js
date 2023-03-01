import './App.css';
import Navigator from './components/Navigator';
import DecimalToBinary from './components/DecimalToBinary';
import CalculadoraBinarioADecimal from './components/CalculadoraBinarioADecimal';
import Menu from './components/menu';
import CalculadoraC1 from './components/CalculadoraC1';
import CalculadoraSumaBinaria from './components/CalculadoraSumaBinarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import CalculadoraCapacidad from './components/CalculadoraCapacidadBits';

function App() {

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
          <Route path='*' element={<DecimalToBinary></DecimalToBinary>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
