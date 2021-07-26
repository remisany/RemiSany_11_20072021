//React
import React from "react";
import {Link} from "react-router-dom"

//Assets
import logo from "../assets/Logo.svg"

//CSS
import "../styles/Header.css"

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to = "/"><img src={logo} alt="Kasa" className="k-logo"/></Link>
                <nav className = "k-nav">
                    <Link to = "/" className = "k-nav-link">accueil</Link>
                    <Link to = "/about" className = "k-nav-link">à propos</Link>
                </nav>
            </header>
        )
    }
}

export default Header