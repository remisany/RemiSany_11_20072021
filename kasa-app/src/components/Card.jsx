import React from "react";
import {Link} from "react-router-dom"

import "../styles/Card.css"

class Card extends React.Component {
    render() {

        const {id, title, cover} = this.props

        return (
            <Link to = {`/accomodation/${id}`} className = "k-card">
                <div className = "k-card-cover"></div>
                <img src = {cover} alt = {`Photo du logement : ` + title} className = "k-card-img"/>
                <p className = "k-card-title">{title}</p>
            </Link>
        )
    }
}

export default Card