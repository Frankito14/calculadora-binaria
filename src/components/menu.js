import React from 'react'
import MenuItem from './MenuItem'
export default function Menu(){

    return(
        <div className='menu'>
            <MenuItem text="Pasaje Decimal-Binario" route="/DecimalBinario"></MenuItem>
            <MenuItem text="Pasaje Binario-Decimal" route="/BinarioDecimal"></MenuItem>
            <MenuItem text="Pasaje complemento C2" route="/ComplementoC2"></MenuItem>
            <MenuItem text="Suma de Binarios" route="/SumaBinarios"></MenuItem>
            <MenuItem text="Capacidad de representación" route="/CapacidadRepresentacion"></MenuItem>
        </div>
    )

}