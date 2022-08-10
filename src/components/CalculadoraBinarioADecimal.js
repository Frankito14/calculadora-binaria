import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {PasajeBinarioADecimal} from "./functions/FuncionesBinario-Decimal";
import "./styles/calculator.css"
export default function CalculadoraBinarioADecimal()
{
    const [binario, setBinario] = useState(0)
    const [decimal, setDecimal] = useState(0);

    const handleBinario = (e)=>
    {
        setBinario(e.target.value);
    }

    const [binarioResultado, setBinarioResultado] = useState("0");
    const [resultado,setResultado] = useState(0)
    const [pasos,setPasos] = useState([]);
    const [resultadoSuma, setResultadoSuma] = useState ("");

    const RealizarPasajeDecimalBinario = (bin)=>{
        setBinarioResultado(bin)
        setResultado(PasajeBinarioADecimal(bin)[0]) // Resultado pasaje binario a decimal
        setPasos(PasajeBinarioADecimal(bin)[1]) // Pasos del pasaje
        setResultadoSuma(PasajeBinarioADecimal(bin)[2]) //Suma hecha para llegar al resultado

    }

    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Pasaje Binario a Decimal</h1>
            <p>(Solo numeros enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Numero en binario" type="number" value={binario} function={handleBinario}></BootstrapInput>
                <button className="btn btn-primary" onClick={()=>{RealizarPasajeDecimalBinario(binario)}}>Mostrar</button>
            </div>
            <div className='results-calculator animate__animated animate__fadeInDown'>
                <h5>Resultados:</h5>
                <p>El numero binario "{binarioResultado}" en decimal es {resultado}</p>
            
                {pasos.map((paso)=>{
                    return(<p key={pasos.indexOf(paso)}>{paso}</p>)
                })}
            
                <p>{resultadoSuma}</p>
            </div>
        </div>
    )

    
}