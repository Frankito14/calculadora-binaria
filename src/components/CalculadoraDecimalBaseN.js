import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {PasajeBaseN} from "./functions/FuncionesPasajeBases.js";
import "./styles/calculator.css"
export default function CalculadoraDecimalBaseN()
{
    //Numero
    const [numero, setNumero] = useState(0);
    const HandleNumero = (e)=>{setNumero(e.target.value);}
    //Ancho
    const [base, setBase] = useState(1)
    const HandleBase = (e)=>{setBase(e.target.value);}
    //Pasos
    const [numeroOriginal, setNumeroOriginal] = useState(0);
    const [baseOriginal, setBaseOriginal] = useState(8);
    const [resultado, setResultado] = useState(0);
    const [pasosPasaje, setPasosPasaje] = useState([]);

    //Pasaje
    const RealizarPasajeBaseN = (num,base)=>{
    setNumeroOriginal(num);
    setBaseOriginal(base);
    setPasosPasaje(PasajeBaseN(num,base).pasos);
    setResultado(PasajeBaseN(num,base).resultado);
        
    }


    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Pasaje Decimal a Octal</h1>
            <p>(Solo numeros enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Numero en Decimal" type="number" value={numero} function={HandleNumero}></BootstrapInput>
                <BootstrapInput label="Base" type="number" value={base} function={HandleBase}></BootstrapInput>
                <button className="btn btn-primary" onClick={()=>{RealizarPasajeBaseN(numero,base)}}>Mostrar</button>
            </div>
            <div className='results-calculator animate__animated animate__fadeInDown'>
                <h5>Resultados:</h5>
                <p>{numeroOriginal+" en base "+baseOriginal+" = "+resultado}</p>
                {pasosPasaje.map((paso)=>{return(<li key={pasosPasaje.indexOf(paso)}>{paso}</li>)})}
            </div>
        </div>
    )

    
}