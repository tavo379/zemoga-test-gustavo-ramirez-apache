import React, { useState } from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { HeroContainer, HeroInfo, VotingButton, AditionalInfo } from "./styles";
import { NavBar } from "../NavBar";
import { IoMdThumbsUp, IoMdThumbsDown, IoIosClose } from "react-icons/io";
import wiki from "../../images/Wikki.png";

const dataMain = graphql(gql`
  query DATA_MAIN {
    allMainPeople {
      name
      description
      wiki
      photo {
        responsiveImage {
          src
        }
      }
    }
  }
`);

const Hero = ({ data: { allMainPeople = [] } } = {}) => {
  const [show, setShow] = useState(true);
  const [canvote, setVote] = useState(true);
  return (
    <>
      {allMainPeople.map((main) => (
        <HeroContainer
          style={{ backgroundImage: `url(${main.photo.responsiveImage.src})` }}
        >
          <NavBar />
          <HeroInfo>
            <div className="info-container">
              <div className="blur"></div>
              <div className="content">
                <span>Whats is your opinion on</span> <br />
                <h2>{main.name} ?</h2>
                <p>{main.description}</p>
                <span className="more-info">
                  <img src={wiki} alt="wiki" />
                  <a href={main.wiki}>More information</a>
                </span>
                <span className="veredict">Whats your veredict?</span>
              </div>
              {canvote && (
                <div className="vote-group">
                  <VotingButton liked onClick={() => setVote(false)}>
                    <IoMdThumbsUp size="40px" />
                  </VotingButton>
                  <VotingButton onClick={() => setVote(false)}>
                    <IoMdThumbsDown size="40px" />
                  </VotingButton>
                </div>
              )}
              {!canvote && (
                <div className="vote-group text">
                  <span>Thanks for you voting!</span>
                </div>
              )}
            </div>
          </HeroInfo>
        </HeroContainer>
      ))}
      {show && (
        <AditionalInfo>
          <div className="first-column">
            <span>Speak out. Be heard</span>
            <span>Be counterd</span>
          </div>
          <div className="second-column">
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. It’s easy: You
            share your opinion, we analyze and put the data in a public report.
          </div>
          <div className="third-column">
            <IoIosClose size="30px" onClick={() => setShow(false)} />
          </div>
        </AditionalInfo>
      )}
    </>
  );
};

export const HeroData = dataMain(Hero);
