import React from 'react';
import GithubLogo from "../img/github.svg";
export default function Navigator() {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <h2 class="navbar-brand">Calculadora Binaria</h2>
            <div className='img-container'>
                <a href="https://github.com/Frankito14/calculadora-binaria" target="blank"><img src={GithubLogo} width="30rem" title="Ir al repositorio de Github" alt="Logo de Github" className='fill-white github-logo'></img></a>
             </div>
        </div>
      </nav>

    )
}