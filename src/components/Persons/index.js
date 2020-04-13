import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import background from "../../images/background.png";

import { Person } from "../Person";
/* styles */
import { PersonsContainer, SubmitPerson } from "./styles";

const dataPerson = graphql(gql`
  query GET_DATA {
    allPersonajes {
      name
      description
      id
      category
      _firstPublishedAt
      photo {
        responsiveImage {
          src
        }
      }
    }
  }
`);

const Persons = ({ data: { allPersonajes = [] } } = {}) => {
  const votesStyles = {
    display: "flex",
    width: "50%",
    margin: "0 auto",
    fontSize: "40px",
    marginTop: "50px",
    color: "#383333",
  };
  return (
    <>
      <span style={votesStyles}>Votes</span>
      <PersonsContainer>
        {allPersonajes.map((personaje) => (
          <Person key={personaje.id} {...personaje}></Person>
        ))}
      </PersonsContainer>
      <SubmitPerson style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay"></div>
        <div className="first-column">
          <span>Is there anyone else you would want us to add?</span>
        </div>
        <div className="second-column">
          <button>Submit a Name</button>
        </div>
      </SubmitPerson>
    </>
  );
};

export const PersonsData = dataPerson(Persons);
