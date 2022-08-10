export const InformarError = (num)=>{
    if ((num.includes("."))||(num.includes(",")))
    {
        alert("No sea menso puso un numero con coma mas vale que no va a funcionar");
    }
}


export const MayorAZero = (resto)=>{
    if (resto>=0)
        return resto;
    else
        return "< 0"; 
}

export const ComprobarDesborde = (numero, ancho)=>{
    let numero_maximo;
    numero_maximo = (Math.pow(2,ancho)-1)
    console.log("Capacidad Maxima de representacion = "+numero_maximo);
    if (numero>numero_maximo)
        return "La capacidad maxima de representación en "+ancho+" bits es "+numero_maximo+". Hay desborde";
    else
        return "No hay desborde";
}

export const DecimalABinario = (numero, ancho)=>
{
    InformarError(numero);
    const numero_original = numero;
    let numero_resta = numero_original
    let resto_resta;
    let numero_anterior;
    let binary = "";
    let i;
    let zero;
    let steps = [];
    const a = ancho;
    let overflow = ComprobarDesborde(numero,ancho);
    for(i=a;i--;i>=0)
    {
        zero = 1
        numero_anterior = numero_resta
        resto_resta = numero_resta - (Math.pow(2,i))
        if (resto_resta < 0)
        {zero=0;}
        else
        {numero_resta = resto_resta}
        //console.log(numero_anterior+" - "+"2^"+i+" = "+MayorAZero(resto_resta)+" --> "+zero)
        steps[i] = (numero_anterior+" - "+"2^"+i+" = "+MayorAZero(resto_resta)+" --> Bit "+i+" = "+zero)
        binary = binary+(zero.toString())
    }
    //console.log(numero_original+" = ("+binary+")2");
    //console.log("Capacidad de representacion: "+a+" bits")
    //console.log(steps);
    return [binary,steps.reverse(),overflow]; //(Numero en binario, pasos, si tiene overflow)

    
}


export const MostrarBotonPasos = (binary)=>{
    if(binary!=0)
        return(<button className='btn btn-info'>Mostrar pasos</button>)
    else
        <button className='btn btn-info' disabled>Mostrar pasos</button>
}