export const ObtenerAnchoMayor = (a1,a2)=>{
    /*
        Retorna el numero con el mayor length segun los numeros dados.
    */
    if(a1.length>a2.length)
        return a1.length
    else
        return a2.length
}

export const RellenarAnchoBits = (b1,b2,ancho)=>{
    /*
        Retorna los binarios dados rellenados con 0s para que su length sea el mismo que el ancho dado
        Retorna un array con:
        0: Primer binario rellanado - String
        1: Segundo binario rellenado - String
    */
    let bitsDeRelleno = "";
    bitsDeRelleno = "0".repeat(ancho-b2.length);
    bitsDeRelleno = bitsDeRelleno+b2;
    b2 = bitsDeRelleno //B2 Rellenado
    bitsDeRelleno = "0".repeat(ancho-b1.length);
    bitsDeRelleno = bitsDeRelleno+b1;
    b1 = bitsDeRelleno //B1 Rellenado
    return[b1,b2]

}

export const SumarBits=(b1,b2,cin)=>{
    /*
        Hacer una suma segun los binarios de 1 bit y el carry in dados.
        Retorna un array que contiene:
        0: Resultado del carry in segun la suma realizada - String
        1: Resultado del carry out segun la suma realizada - String
    */
    const result = (parseInt(b1,10)+parseInt(b2,10)+parseInt(cin,10))
    switch(result)
    {
        case 0: return["0","0"];
        case 1: return["1","0"];
        case 2: return["0","1"];
        default: return["1","1"];
    }
    
}

String.prototype.replaceAt = function(index, replacement) {
    /*
        Remplazar el caracter de la posicion *index* de un string con *replacement*
        Retorna el string con su caracter remplazado 
    */
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

export const InformarError =(b1,b2,ancho)=>{
    /*
        Alerta si alguno de los binarios dados no es valido para el ancho elegido.
    */
    if((ancho<b1.length)||(ancho<b2.length))
    {alert("Error: El ancho elegido es menor al ancho de los números")}

    // Validacion numero 1
    let error = false;
    for(let i=0;i<b1.length;i++)
    {
        if((b1.charAt(i)!=="0")&&(b1.charAt(i)!=="1"))
            error = true;
    }
    if(error)
    alert("Error: El primer número no es un binario")
    
    //Validacion numero 2
    error = false;
    for(let i=0;i<b2.length;i++)
    {
        if((b2.charAt(i)!=="0")&&(b2.charAt(i)!=="1"))
            error = true;
    }
    if(error)
    alert("Error: El segundo número no es un binario")
    
}

export const SumarBinarios = (b1,b2,ancho)=>{
    /*
        Realizar una suma binaria segun los binarios y el ancho dado.
        Retorna un objeto con:
        cout: El binario que queda en el carry out - String
        pasos: Las partes visibles de la suma (carry out, primer binario rellenado, segundo binario rellenado y el carry in) - Array
        overflow: Si tiene overflow (desborde) - String
        ancho: Ancho usado para la suma - Número

    */
    InformarError(b1,b2,ancho);
    let binario1Rellenado;
    let binario2Rellenado;
    let cin ="0".repeat(ancho);
    let cout = "";
    binario1Rellenado = RellenarAnchoBits(b1,b2,ancho)[0]
    binario2Rellenado = RellenarAnchoBits(b1,b2,ancho)[1]
    let coutBitValue;
    let cinBitValue;
    let overflow;
    for(let i=(ancho-1); i>=0;i--)
    {

        coutBitValue = SumarBits(binario1Rellenado.charAt(i),binario2Rellenado.charAt(i),cin.charAt(i))[0]
        cinBitValue = SumarBits(binario1Rellenado.charAt(i),binario2Rellenado.charAt(i),cin.charAt(i))[1]
        cout = coutBitValue + cout;
        if(i===0)
            overflow = cinBitValue;
        else
            cin = cin.replaceAt((i-1),cinBitValue);
    }
    let pasos = [cin,binario1Rellenado,binario2Rellenado,cout]
    return{cout: cout, pasos:pasos, overflow:overflow,ancho:ancho}

}
