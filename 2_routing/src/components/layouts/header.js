import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="menu">
        <NavLink to="/home" activeClassName="active-route" exact>Home</NavLink>
        <NavLink to="/about" activeClassName="active-route" exact>About</NavLink>
    </div>
    )
}
