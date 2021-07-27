//React
import React from "react";
import { Redirect } from "react-router-dom";

//Components
import Dropdown from "../components/Dropdown";
import StarScale from "../components/StarScale";
import Carousel from "../components/Carousel";

//Datas
import { accomodationList } from "../datas/accomodationList";

//CSS
import "../styles/Accomodation.css"

//Component accomodation: accomodation page
class Accomodation extends React.Component {
  render () {
    const id = this.props.match.params.id

    const accomodation = accomodationList.filter(accomodation => accomodation.id === id)[0];
    if (!accomodation) return <Redirect to="/404" />

    const {
      title,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags
    } = accomodation;

    return (
      <main>
        
        <Carousel pictures={pictures}/>

        <section className = "k-presentation">
          <div className = "k-presentation-left">
            <h1 className = "k-title">{title}</h1>
            <h2 className = "k-location">{location}</h2>
            <div className = "k-tags">
              {tags.map((tag, index) => (
                <p key = {index} className = "k-tag">{tag}</p>
              ))}
            </div>
          </div>

          <div className = "k-presentation-right">
            <div className = "k-host">
              <div className = "k-host-name">
                <p>{host.name.split(" ")[0]}</p>
                <p>{host.name.split(" ")[1]}</p>
              </div>
              <img className = "k-host-picture" src = {host.picture} alt = {`Photo de profil de : ` + host.name}/>
            </div>
            <StarScale ratingValue = {rating} />
          </div>
        </section>

        <section className = "k-description">
          <Dropdown
            title = "Description"
            content = {description}
          />
          <Dropdown
            title = "Equipements"
            content = {equipments.map((equipment, index) => (
              <li key = {index}>
                {equipment}
              </li>
            ))}
          />
        </section>
      </main>
    );
  }
}

export default Accomodation;