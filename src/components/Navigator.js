import React from 'react';
import GithubLogo from "../img/github.svg";
import ImagenSVG from './ImagenSVG';
export default function Navigator(){

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand menu-item-text"  href="#">Calculadora Binaria</a>
            <div className='img-container'>
                <a href="https://github.com/Frankito14/calculadora-binaria" target="blank"><img src={GithubLogo} width="30rem" title="Repositorio de Github" className='fill-white github-logo'></img></a>
             </div>
        </div>
      </nav>

    )
}