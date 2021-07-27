//React
import React from "react";
import {Link, NavLink} from "react-router-dom"

//Assets
import logo from "../assets/Logo.svg"

//CSS
import "../styles/Header.css"

//Component header: display logo and navigation bar
class Header extends React.Component { 
    render() {
        return (
            <header>
                <Link to = "/"><img src = {logo} alt = "Logo de Kasa" className = "k-logo"/></Link>
                <nav className = "k-nav">
                    <NavLink exact to = "/" className = "k-nav-link" activeStyle = {{ textDecoration: "underline" }}>accueil</NavLink>
                    <NavLink to = "/about" className = "k-nav-link" activeStyle = {{ textDecoration: "underline" }}>à propos</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header