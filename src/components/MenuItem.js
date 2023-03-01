import React from 'react'
import { NavLink } from 'react-router-dom';

export default function MenuItem(props){
    return(
        <NavLink to={props.route} className="menu-item btn animate__animated animate__fadeIn">
            <div>
                <p className='menu-item-text'>{props.text}</p>
            </div>
        </NavLink>    
    )
}