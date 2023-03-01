export const ObtenerValorMayor = (u1,u2)=>{
    if(u1>u2)
        return {mayor:u1,menor:u2}
    else
        return {mayor:u2,menor:u1}
}

export const ObtenerValorUnidad = (unidad)=>{
    switch(unidad)
    {
        case 1: return "Bytes"
        break;
        case 2: return "Kilobytes"
        break;
        case 3: return "Megabytes"
        break;
        case 4: return "Gigabytes"
        break;
        case 5: return "Terabytes"
        break;
        case 6: return "Petabytes"
        break;
    }
}

export const PasajeUnidadesAlmacenamiento = (num, u1, u2)=>{
    const mayor = ObtenerValorMayor(u1,u2).mayor
    const menor = ObtenerValorMayor(u1,u2).menor
    const diferencia = mayor - menor;
    let resultado = num;
    if(u1>u2) 
    {
        for(let i=u1; i>u2; i--)
        {
            resultado = (resultado/1024)
            console.log(`${num}${ObtenerValorUnidad(i-1)} = ${resultado}${ObtenerValorUnidad(i)}`)
        }
    }
    else
    for(let i=u1; i<u2; i++)
    {
        resultado = (resultado*1024)
        console.log(`${num}${ObtenerValorUnidad(i-1)} = ${resultado}${ObtenerValorUnidad(i)}`)
    }

}
