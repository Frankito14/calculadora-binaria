export const ObtenerAnchoMayor = (a1,a2)=>{
    if(a1.length>a2.length)
        return a1.length
    else
        return a2.length
}

export const RellenarAnchoBits = (b1,b2,ancho)=>{
    let bitsDeRelleno = "";
    let cantidadBitsRelleno;
    /*
    if(b1.length == ancho)
    {
        bitsDeRelleno = "0".repeat(ancho-b2.length);
        bitsDeRelleno = bitsDeRelleno+b2;
        b2 = bitsDeRelleno //B2 Rellenado

    }
    else
    {
        bitsDeRelleno = "0".repeat(ancho-b1.length);
        bitsDeRelleno = bitsDeRelleno+b1;
        b1 = bitsDeRelleno //B1 Rellenado
    }
    */
    bitsDeRelleno = "0".repeat(ancho-b2.length);
    bitsDeRelleno = bitsDeRelleno+b2;
    b2 = bitsDeRelleno //B2 Rellenado
    bitsDeRelleno = "0".repeat(ancho-b1.length);
    bitsDeRelleno = bitsDeRelleno+b1;
    b1 = bitsDeRelleno //B1 Rellenado
    return[b1,b2]

}

export const SumarBits=(b1,b2,cin)=>{
    
    const result = (parseInt(b1,10)+parseInt(b2,10)+parseInt(cin,10))
    switch(result)
    {
        case 0: return["0","0"];
        break;
        case 1: return["1","0"];
        break;
        case 2: return["0","1"];
        break;
        case 3: return["1","1"];
    }
    
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

export const InformarError =(b1,b2,ancho)=>{

    if((ancho<b1.length)||(ancho<b2.length))
    {alert("Error: El ancho elegido es menor al ancho de los numeros")}

    // Validacion numero 1
    let error = false;
    for(let i=0;i<b1.length;i++)
    {
        if((b1.charAt(i)!="0")&&(b1.charAt(i)!="1"))
            error = true;
    }
    if(error == true)
    alert("Error: El primer número no es un binario")
    
    //Validacion numero 2
    error = false;
    for(let i=0;i<b2.length;i++)
    {
        if((b2.charAt(i)!="0")&&(b2.charAt(i)!="1"))
            error = true;
    }
    if(error == true)
    alert("Error: El segundo número no es un binario")
    
}

export const SumarBinarios = (b1,b2,ancho)=>{
   
    InformarError(b1,b2,ancho);
    let binario1Rellenado;
    let binario2Rellenado;
    //const ancho = ObtenerAnchoMayor(b1,b2);
    //const ancho = 8;
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
        if(i==0)
            overflow = cinBitValue;
        else
            cin = cin.replaceAt((i-1),cinBitValue);
        //cin.charAt(i-1) = SumarBits(binario1Rellenado.charAt(i),binario2Rellenado.charAt(i),cin.charAt(i))[1];
    }
    let pasos = [cin,binario1Rellenado,binario2Rellenado,cout]
    return{cout: cout, pasos:pasos, overflow:overflow,ancho:ancho}

}
