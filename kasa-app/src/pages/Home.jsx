import React from "react";

import Banner from "../components/Banner";

import banner from "../assets/BannerHome.png"

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Banner
          content = "Chez vous, partout et ailleurs"
          src = {banner}
          alt = "Photo de la bannière"
        />
      </React.Fragment>
    );
  }
}

export default Home;