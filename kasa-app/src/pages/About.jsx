import React from "react";

import Banner from "../components/Banner";

import banner from "../assets/BannerAbout.png"

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Banner
          src = {banner}
          alt = "Photo de la bannière"
        />
      </React.Fragment>
    );
  }
}

export default About;