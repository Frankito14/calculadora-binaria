import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {DecimalABinario} from "./functions/FuncionesDecimal-Binario";
import "./styles/calculator.css"
export default function DecimalToBinary()
{
    //Numero
    const [numero, setNumero] = useState(0);
    const HandleNumero = (e)=>{setNumero(e.target.value);}
    //Ancho
    const [ancho, setAncho] = useState(1)
    const HandleAncho = (e)=>{setAncho(e.target.value);}
    //Pasos
    const [numeroOriginal, setNumeroOriginal] = useState(0);
    const [anchoOriginal, setAnchoOriginal] = useState(1);
    const [numeroBinario, setNumeroBinario] = useState(0);
    const [pasosPasaje, setPasosPasaje] = useState([]);
    const [desbordePasaje, setDesbordePasaje] = useState("");
    //Pasaje
    const RealizarPasaje = (n,a)=>{
        setNumeroOriginal(n);
        setAnchoOriginal(a);
        setNumeroBinario(DecimalABinario(n,a)[0]);
        setPasosPasaje(DecimalABinario(n,a)[1]);
        setDesbordePasaje(DecimalABinario(n,a)[2]);
        
    }


    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Pasaje Decimal a Binario</h1>
            <p>(Solo números enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Número en Decimal" type="number" value={numero} function={HandleNumero}></BootstrapInput>
                <BootstrapInput label="Ancho de Bits" type="number" value={ancho} function={HandleAncho}></BootstrapInput>
                <button className="btn btn-secondary mt-3 mb-4" onClick={()=>{RealizarPasaje(numero,ancho)}}>Mostrar</button>
            </div>
            <div className='results-calculator animate__animated animate__fadeInDown'>
                <h5>Resultados:</h5>
                <p>{numeroOriginal+" en un ancho de "+anchoOriginal+" bits = "+numeroBinario}</p>
                <p>{desbordePasaje}</p>
                {pasosPasaje.map((paso)=>{
                    return(<p key={pasosPasaje.indexOf(paso)}>{paso}</p>
                    )})}
            </div>
        </div>
    )

    
}