//React
import React from "react";

//Assets
import StarOrange from "../assets/StarOrange.svg"
import StarGrey from "../assets/StarGrey.svg"


class StarScale extends React.Component {
    render() {
        const { ratingValue } = this.props

        const scale = [1,2,3,4,5]

        return (
            <div className = "k-stars">
                {scale.map((scaleValue, index) =>
                    ratingValue >= scaleValue ? <img key = {index} className = "k-star" alt = "élement décoratif étoile orange" src ={StarOrange}/> : <img key = {index} className = "k-host-star" alt = "élement décoratif étoile grise" src ={StarGrey}/>
                )}
            </div>

        )
    }
}

export default StarScale