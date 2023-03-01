export const InformarError = (bin)=>{
    //Alerta si el binario dado no es valido
    let error = false;
    for(let i=0;i<bin.length;i++)
    {
        if((bin.charAt(i)!=="0")&&(bin.charAt(i)!=="1"))
            error = true;
    }
    if(error)
    alert("Error: Usted no ingreso un número binario")
}

export const PasajeBinarioADecimal = (binario)=>{
    /*
    Realizar el pasaje de un numero binario a decimal
    Devuelve un array con
        0: El binario dado expresado en decimal - String
        1: Pasos del pasaje - Array
        2: La suma necesaria para llegar al resultado en decimal - String
    */
   InformarError(binario);
   const ancho = parseInt(binario.length);
   const cantidad_loop = ancho-1
   let i;
   let resultado = 0
   let valorPotencia = 0
   let steps = []
   let resultadoSuma = `${binario} =`
   for(i=0;i<=cantidad_loop;i++)
   {
        if (binario.charAt(cantidad_loop-i)==="1")
        {
            valorPotencia = Math.pow(2,i)
            resultado += valorPotencia;
            steps[i]=(`BIT ${i} = 1 → 2^${i} = ${valorPotencia}`)
                if(i===0)
                    resultadoSuma = resultadoSuma.concat(`${valorPotencia}`);
                else
                    resultadoSuma = resultadoSuma.concat(` + ${valorPotencia}`);
        }
        else
        steps[i]=(`BIT ${i} = 0 → 2^${i} = 0`)
   }
   return[resultado,steps,resultadoSuma];
}