import React from 'react'

export default function ImagenSVG(props){
    return(
    <div className='img-container'>
        <img src={props.img} width={props.width} title={props.title} className='fill-white'></img>
    </div>
    )
}