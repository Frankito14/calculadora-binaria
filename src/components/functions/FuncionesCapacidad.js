export const CalcularCapacidadAncho = (ancho)=>{
    let max = Math.pow(2,ancho);
    let valor_minimo = "0".repeat(ancho);
    let valor_maximo = "1".repeat(ancho);
    let vMinimoSinSigno = parseInt(valor_minimo,2)
    let vMaximoSinSigno = parseInt(valor_maximo,2)
    let pasos = [];
    let resultado = (`${ancho} bits pueden representar ${max} valores`);
    pasos.push(`Rango de valores sin signo: 0 a ${max-1} (${max} valores representables)`)
    pasos.push(`Valor mínimo representable sin signo: ${valor_minimo} (${vMinimoSinSigno})`)
    pasos.push(`Valor máximo representable sin signo: ${valor_maximo} (${vMaximoSinSigno})`)
    pasos.push(`Rango de valores con signo: -${Math.pow(2,(ancho-1))} a ${Math.pow(2,ancho-1)-1} (${max} valores representables)`)
    return {resultado:resultado, pasos:pasos}
}