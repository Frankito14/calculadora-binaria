import React, { useState } from 'react'
import GithubLogo from "../img/github.svg";
import ReactLogo from "../img/react.svg";
import BootstrapLogo from "../img/bootstrap.svg";
import CSSLogo from "../img/css3.svg";
import HTMLLogo from "../img/html5.svg";
import JSLogo from "../img/javascript.svg";
import ImagenSVG from './ImagenSVG';
export default function Footer(){

    const [imgSize, setImageSize] = useState("100%")
    return(
        <div className='footer'>
            <p className='footer-subtitle'>Made using:</p>
            <div className='social-media'>
                <ImagenSVG img={HTMLLogo} title={"HTML5"} width={imgSize}></ImagenSVG>
                <ImagenSVG img={CSSLogo} title={"CSS3"} width={imgSize}></ImagenSVG>
                <ImagenSVG img={JSLogo} title={"Javascript"} width={imgSize}></ImagenSVG>
                <ImagenSVG img={BootstrapLogo} title={"Bootstrap 5"} width={imgSize}></ImagenSVG>
                <ImagenSVG img={ReactLogo} title={"React"} width={imgSize}></ImagenSVG>
            </div>
        </div>
    )
}