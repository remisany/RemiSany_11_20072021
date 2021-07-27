//React
import React from "react";
import {Link} from "react-router-dom"

//CSS
import "../styles/Error.css"

//Component error: 404 error page
class Error extends React.Component {
    render() {
        return (
            <main className = "k-error">
                <h1 className = "k-error-title">404</h1>
                <h2 className = "k-error-tagline">Oups! La page que vous demandez n'existe pas</h2>
                <Link className = "k-error-link" to = "/">Retourner sur la page d'accueil</Link>
            </main>
        )
    }
}

export default Error