//React
import React from "react";

//Assets
import right from "../assets/Right.svg"
import left from "../assets/Left.svg"

//CSS
import "../styles/Carousel.css"


//Component carousel: displays several photos that can be displayed using arrows
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 0};
    }

    nextPicture() {
        this.setState(state => ({
            currentIndex: state.currentIndex === this.props.pictures.length -1 ?  0 : state.currentIndex + 1
        }));
    }

    previousPicture() {
        this.setState(state => ({
            currentIndex: state.currentIndex === 0 ?  this.props.pictures.length -1 : state.currentIndex - 1
        }));
    }

    render() {
        const {pictures} = this.props
        const {currentIndex} = this.state

        return (
            <section className = "k-carrousel">
                {pictures.length > 1 && (<img className = "k-carrousel-left" src = {left} alt = "Element décoratif : chevron gauche" onClick={() => this.previousPicture()}/>)}
                {pictures.length > 1 && (<img className = "k-carrousel-right" src = {right} alt = "Element décoratif : chevron droit" onClick={() => this.nextPicture()}/>)}
                {pictures.map((picture, index) => (
                    <div key = {index}>
                        {index === currentIndex && (<img className = "k-carrousel-picture" src = {picture} alt = {`Photo numéro` + index + ` du logement`}/>)}
                    </div>
                ))}
            </section>
        )
    }
}

export default Carousel