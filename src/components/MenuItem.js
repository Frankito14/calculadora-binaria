import React from 'react'
import { NavLink } from 'react-router-dom';

export default function MenuItem(props){
    return(
        <NavLink to={props.route} className="menu-item btn btn-secondary animate__animated animate__fadeIn">
        <div>
                    <h5 className='menu-item-text'>{props.text}</h5>
            </div>
        </NavLink>    
    )
}