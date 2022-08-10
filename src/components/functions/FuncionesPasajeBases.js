String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


export const SepararParteDecimal = (num)=>{
    const new_num = num.split(",");
    const num_export = {entero:new_num[0],decimal:new_num[1]}
    return num_export;
}

export const PasajeBaseNParteEntera = (num,base)=>{
    const ancho = num.length-1;
    let numero_nueva_base = ""
    let resultado ="";
    let resto = num
    let resto_ecuacion = 0;
    let steps = [];
    for(let i=ancho;i>=0;i--)
    {
        numero_nueva_base = Math.floor(resto/Math.pow(base,i));
        resto_ecuacion = (resto % Math.pow(base,i));
        //console.log(`${resto} / ${base} ^ ${i} = ${numero_nueva_base} --> Resto = ${resto_ecuacion}`)
        steps.push(`${resto} / ${base} ^ ${i} = ${numero_nueva_base} --> Resto = ${resto_ecuacion}`)
        resto = resto_ecuacion
        resultado = resultado + numero_nueva_base;
    }
    //console.log(`${num} en base ${base} = ${numero_nueva_base}`);
    //console.log({entero:numero_nueva_base,pasos:steps})
    return {entero:resultado,pasos:steps}
}

export const PasajeBaseNParteDecimal = (num,base)=>{
    
    let num_decimal_part = num;
    num = parseFloat(("0."+num));
    //let num_decimal_part = SepararParteDecimal(("0,"+num)).decimal
    let total_decimal = "";
    let new_num = 0;
    let indexOfDecimal;
    for(let i=1;i<=5;i++)
    {
        if(num_decimal_part != "0")
        {
            new_num = toString(num*base);
            indexOfDecimal = new_num.search(".");
            new_num = toString(new_num.replaceAt(indexOfDecimal,","));
            total_decimal = total_decimal + (SepararParteDecimal(new_num).entero);
            new_num = parseFloat(("0.")+(SepararParteDecimal(new_num).decimal));
        }
    }
    return toString(total_decimal);


}

export const PasajeBaseN = (num,base)=>{
    let entero = "";
    const enteroDecimal = SepararParteDecimal(num).entero;
    const fraccionDecimal = SepararParteDecimal(num).decimal;
    entero = PasajeBaseNParteEntera(num,base).entero;
    let pasos = PasajeBaseNParteEntera(num,base).pasos;
    return{resultado:entero,pasos:pasos};


}
