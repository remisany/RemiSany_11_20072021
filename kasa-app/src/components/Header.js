import React from "react";
import logo from "../assets/Logo.svg"
import "../styles/Header.css"

class Header extends React.Component {
    render() {
        return (
            <img src={logo} alt="Kasa" className="k-logo"/>
        )
    }
}

export default Header