import {SumarBinarios} from "./FuncionesSumaBinarios";

export const InformarError = (bin)=>{
    let error = false;
    for(let i=0;i<bin.length;i++)
    {
        if((bin.charAt(i)!="0")&&(bin.charAt(i)!="1"))
            error = true;
    }
    if(error == true)
    alert("Error: Usted no ingreso un número binario")
}

export const ComprobarResultadoMaximo = (res,ancho)=>{
    console.log("Cantidad de 1:"+res.split('1').length-1)
    console.log("Ancho:"+ancho);
}

export const PasajeC2 = (bin)=>{
    InformarError(bin);
    const ancho = bin.length
    let i;
    let c1 = "";
    let steps = [];
    for(i=0;i<ancho;i++)
    {
        if (bin.charAt(i)==0)
            c1 = c1.concat("1")
        else
            c1 = c1.concat("0");    
    }
    steps[0]=`NOT ${bin} = ${c1} = C1`
    let c2 = SumarBinarios(c1,"1",c1.length).cout;
    let overflow = SumarBinarios(c1,"1",c1.length).overflow;
    if(overflow=="1"){ c2= overflow+c2;} 
    steps[1]=`C1 + 1 = ${c2} = C2`
    return[c2,steps];
}
