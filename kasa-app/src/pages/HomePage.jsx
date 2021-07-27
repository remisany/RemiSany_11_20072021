//React
import React from "react";

//Components
import Banner from "../components/Banner";
import Card from "../components/Card";

//Assets
import banner from "../assets/BannerHome.png"

//Datas
import { accomodationList } from "../datas/accomodationList";

//CSS
import "../styles/Home.css"

//Component home: home page
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