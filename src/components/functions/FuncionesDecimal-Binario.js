export const InformarError = (num)=>{
    /*Alerta si el numero dado no es un entero*/
    if ((num.includes("."))||(num.includes(",")))
    {
        alert("El numero ingresado no es un entero");
    }
}


export const MayorAZero = (resto)=>{
    /*
        Describe si el numero dado es menor a 0 o no
        En caso de ser menor a 0, devuelve un string, sino devuelve el numero dado
    */
    if (resto>=0)
        return resto;
    else
        return "Menor a 0"; 
}

export const ComprobarDesborde = (numero, ancho)=>{
    /*
        Describe si hay un desborde (overflow) segun el numero decimal dado y el ancho de bits dado.
    */
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
     /*
    Realizar el pasaje de un numero decimal a binario
    Devuelve un array con
        0: El decimal expresado en binario - String
        1: Pasos del pasaje - Array
        2: Si tiene overflow - String
    */
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
        steps[i] = `${numero_anterior} - 2^${i} = ${MayorAZero(resto_resta)} → Bit ${i} = ${zero}`
        binary = binary+(zero.toString())
    }
    return [binary,steps.reverse(),overflow]; //(Numero en binario, pasos, si tiene overflow)

    
}

