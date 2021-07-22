import React from "react";

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
            <article className = "k-dropdown">
                <div onClick={() => this.handleClick()}>{title}</div>
                {this.state.isClose ? null : <div>{content}</div>}
            </article>
        )
    }
}

export default Dropdown