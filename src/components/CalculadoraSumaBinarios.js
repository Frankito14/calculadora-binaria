import React, { useState } from 'react';
import BootstrapInput from './bootstrap-components/BootstrapInput';
import {PasajeC2} from "./functions/FuncionesC1C2";
import {SumarBinarios} from "./functions/FuncionesSumaBinarios";
import "./styles/calculator.css"

export default function CalculadoraSumaBinaria(){

    const [binario1, setBinario1] = useState(0);
    const [binario2, setBinario2] = useState(0);
    const [ancho, setAncho] = useState(1);

    const handleBinario1 = (e)=>{setBinario1(e.target.value);}
    const handleBinario2 = (e)=>{setBinario2(e.target.value);}
    const handleAncho = (e)=>{setAncho(e.target.value);}

    const [binario1Resultado, setBinario1Resultado] = useState("0");
    const [binario2Resultado, setBinario2Resultado] = useState("0");
    const [anchoResultado, setAnchoResultado] = useState("1");
    const [resultado,setResultado] = useState(0);
    const [overflow,setOverflow] = useState(0);
    const [pasos,setPasos] = useState([0,0,0,0]);

    const RealizarSumaBinarios = (bin1,bin2,ancho)=>{
        setBinario1Resultado(bin1);
        setBinario2Resultado(bin2);
        setResultado(SumarBinarios(bin1,bin2,ancho).cout);
        setPasos(SumarBinarios(bin1,bin2,ancho).pasos);
        setOverflow(SumarBinarios(bin1,bin2,ancho).overflow)
        setAnchoResultado(SumarBinarios(bin1,bin2,ancho).ancho)

    }

    return(
        <div className='main-calculator animate__animated animate__fadeInDown'>
            <h1>Suma de Binarios </h1>
            <p>(Solo numeros enteros)</p>
            <div className="form-calculator">
                <BootstrapInput label="Primer numero en binario" type="number" value={binario1} function={handleBinario1}></BootstrapInput>
                <BootstrapInput label="Segundo numero en binario" type="number" value={binario2} function={handleBinario2}></BootstrapInput>
                <BootstrapInput label="Ancho de Bits" type="number" value={ancho} function={handleAncho}></BootstrapInput>
                <button className="btn btn-primary" onClick={()=>{RealizarSumaBinarios(binario1,binario2,ancho)}}>Mostrar</button>
            </div>
            <div className='results-calculator'>
                <h5>Resultados:</h5>
                <p>{binario1Resultado} + {binario2Resultado} = {resultado}</p>
                <p>Ancho de bits: {anchoResultado}</p>
                <p>Procedimiento:</p>
                <table className='table-suma-data'>
                    <tr>
                        <td>Carry In</td>
                        <td className='table-suma-data-number'>{pasos[0]}</td>
                    </tr>
                    <tr>
                        <td>Primer Numero</td>
                        <td className='table-suma-data-number'>{pasos[1]}</td>
                    </tr> 
                    <tr>
                        <td>Segundo Numero</td>
                        <td className='table-suma-data-number'>{pasos[2]}</td>
                    </tr> 
                    <tr>
                        <td>Carry Out</td>
                        <td className='table-suma-data-number'>{pasos[3]}</td>
                    </tr>                 
                </table>
                <p>Overflow: {overflow}</p>
                <p>Resultado real: {overflow+resultado}</p>
            </div>
        </div>
    )
}