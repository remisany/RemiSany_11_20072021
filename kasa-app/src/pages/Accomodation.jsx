//React
import React from "react";

//Components
import Dropdown from "../components/Dropdown";

//Datas
import { accomodationList } from "../datas/accomodationList";

//CSS
import "../styles/Accomodation.css"

class Accomodation extends React.Component {

  render () {
    const id = this.props.match.params.id

    const accomodation = accomodationList.filter(accomodation => accomodation.id === id)[0];

    const {
      title,
      //pictures,
      description,
      //host,
      //rating,
      location,
      equipments,
      tags
    } = accomodation;

    return (
      <main>
        <section>
          <h1 className = "k-title">{title}</h1>
          <h2 className = "k-location">{location}</h2>
          <div className = "k-tags">
            {tags.map((tag) => (
              <p className = "k-tag">{tag}</p>
            ))}
          </div>
        </section>
        <section>
          <Dropdown
            title = "Description"
            content = {description}
          />
          <Dropdown
            title = "Equipements"
            content = {equipments.map((equipment) => (
              <li>
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

/*
        <p>{pictures}</p>
        <p>{description}</p>
        <p>{host}</p>
        <p>{rating}</p>
        <p>{location}</p>
        <p>{equipments}</p>
        <p>{tags}</p>

import Dropdown from "../components/Dropdown";

import { accomodationList } from "../datas/accomodationList";

        <section>
          <Dropdown
            title = 
            content = 
          />
        </section>
*/