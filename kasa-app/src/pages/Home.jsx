import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";

import banner from "../assets/BannerHome.png"

import { accomodationList } from "../datas/accomodationList";

import "../styles/Home.css"

class Home extends React.Component {
  render () {
    return (
      <main>
        <Banner
          content = "Chez vous, partout et ailleurs"
          src = {banner}
          alt = "Photo de la bannière"
        />
        <section className = "k-card-container">
            {accomodationList.map((accomodation) => (
              <Card key = {accomodation.id}
              id = {accomodation.id}
              title = {accomodation.title}
              cover = {accomodation.cover}
              />
            ))}
        </section>
      </main>
    );
  }
}

export default Home;