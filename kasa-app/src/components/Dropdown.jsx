//React
import React from "react";

//Assets
import up from "../assets/Up.svg"
import down from "../assets/Down.svg"

//CSS
import "../styles/Dropdown.css"

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isClose: true};
    }

    handleClick() {
        this.setState(state => ({
            isClose: !this.state.isClose
        }));
    }

    render() {
        const {title, content} = this.props

        return (
            <article>
                <div className = "k-dropdown-button" onClick={() => this.handleClick()}>
                    {title}
                    {this.state.isClose ? <img className = "k-dropdown-chevron" src = {down} alt = "Element décoratif : chevron bas"/> : <img className = "k-dropdown-chevron" src = {up} alt = "Element décoratif : chevron haut"/>}
                </div>
                {this.state.isClose ? null : <div className = "k-dropdown-content">{content}</div>}
            </article>
        )
    }
}

export default Dropdown