import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {CalcularCapacidadAncho} from "./functions/FuncionesCapacidad";
import "./styles/calculator.css"

export default function CalculadoraCapacidad(){

    const [ancho, setAncho] = useState(0);

    const handleAncho = (e)=>
    {
        setAncho(e.target.value);
    }

    const [pasos,setPasos] = useState([]);
    const [resultado,setResultado] = useState("Ingrese el número");
    const RealizarCapacidad = (ancho)=>{
        setResultado(CalcularCapacidadAncho(ancho).resultado);
        setPasos(CalcularCapacidadAncho(ancho).pasos);
        
    }

    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Capacidad de representación </h1>
            <p>(Solo numeros enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Numero en decimal" type="number" value={ancho} function={handleAncho}></BootstrapInput>
                <button className="btn btn-primary" onClick={()=>{RealizarCapacidad(ancho)}}>Mostrar</button>
            </div>
            <div className='results-calculator animate__animated animate__fadeInDown'>
                <h5>Resultado: {resultado}</h5>
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