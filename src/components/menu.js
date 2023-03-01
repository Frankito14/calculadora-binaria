import React from 'react'
import MenuItem from './MenuItem'
export default function Menu(){

    return(
        <div className='menu'>
            <MenuItem text="Pasaje Decimal a Binario" route="/DecimalBinario"></MenuItem>
            <MenuItem text="Pasaje Binario a Decimal" route="/BinarioDecimal"></MenuItem>
            <MenuItem text="Pasaje Complemento C2" route="/ComplementoC2"></MenuItem>
            <MenuItem text="Suma de Binarios" route="/SumaBinarios"></MenuItem>
            <MenuItem text="Capacidad de Representación" route="/CapacidadRepresentacion"></MenuItem>
        </div>
    )

}