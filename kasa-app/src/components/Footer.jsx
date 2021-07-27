//React
import React from "react";
import {Link} from "react-router-dom"

//Assets
import logo from "../assets/LogoWhite.svg"

//CSS
import "../styles/Footer.css"

//Component footer: display logo and copyright
class Footer extends React.Component {
    render() {
        return (
            <footer className = "k-footer">
                <Link to = "/"><img src = {logo} alt = "Logo de Kasa" className = "k-footer-logo"/></Link>
                <p className = "k-footer-tagline">© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer