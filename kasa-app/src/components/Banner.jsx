import React from "react";

import "../styles/Banner.css"


class Banner extends React.Component {
    render() {

        const {content, src, alt} = this.props

        return (
            <section className = "k-banner">
                <div className = "k-banner-cover"></div>
                <img src = {src} alt = {alt} className = "k-banner-img"/>
                <h2 className = "k-banner-title">{content}</h2>
            </section>
        )
    }
}

Banner.defaultProps = {
    content: ""
}

export default Banner