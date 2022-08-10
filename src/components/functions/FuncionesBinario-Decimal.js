export const InformarError = (bin)=>{
    let error = false;
    for(let i=0;i<bin.length;i++)
    {
        if((bin.charAt(i)!="0")&&(bin.charAt(i)!="1"))
            error = true;
            console.log(bin.charAt(i)+" : "+i);
    }
    if(error == true)
    alert("Error: Usted no ingreso un número binario")
}

export const PasajeBinarioADecimal = (binario)=>{
   InformarError(binario);
   const ancho = parseInt(binario.length);
   const cantidad_loop = ancho-1
   let i;
   let resultado = 0
   let valorPotencia = 0
   let steps = []
   let resultadoSuma = `${binario} =`

   // 0001
   for(i=0;i<=cantidad_loop;i++)
   {
        if (binario.charAt(cantidad_loop-i)==1)
        {
            valorPotencia = Math.pow(2,i)
            resultado += valorPotencia;
            steps[i]=(`BIT ${i} = 1 --> 2^${i} = ${valorPotencia}`)
                if(i==0)
                    resultadoSuma = resultadoSuma.concat(`${valorPotencia}`);
                else
                    resultadoSuma = resultadoSuma.concat(` + ${valorPotencia}`);
        }
        else
        steps[i]=(`BIT ${i} = 0 --> 2^${i} = 0`)
   }
   //console.log(`${binario} en decimal es ${resultado}`)
   //console.log(steps);
   return[resultado,steps,resultadoSuma];
}