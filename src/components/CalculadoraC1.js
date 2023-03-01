import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {PasajeC2} from "./functions/FuncionesC1C2";
import "./styles/calculator.css"

export default function CalculadoraC1(){

    const [binario, setBinario] = useState(0);

    const handleBinario = (e)=>
    {
        setBinario(e.target.value);
    }

    const [binarioResultado, setBinarioResultado] = useState("0");
    const [resultado,setResultado] = useState(10);
    const [pasos,setPasos] = useState([]);

    const RealizarPasajeC2 = (bin)=>{
        setBinarioResultado(bin);
        setResultado(PasajeC2(bin)[0]);
        setPasos(PasajeC2(bin)[1]);
        
    }

    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Complemento C1 - C2 </h1>
            <p>(Solo números enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Número en binario" type="number" value={binario} function={handleBinario}></BootstrapInput>
                <button className="btn btn-secondary mt-3 mb-4" onClick={()=>{RealizarPasajeC2(binario)}}>Mostrar</button>
            </div>
            <div className='results-calculator animate__animated animate__fadeInDown'>
                <h5>Resultados:</h5>
                <p>{binarioResultado} en C2 = {resultado}</p>
                <p>Procedimiento:</p>
                {pasos.map((paso)=>{
                    return(
                    <p key={pasos.indexOf(paso)}> {paso} </p>
                    )
                })}
            </div>
        </div>
    )
}