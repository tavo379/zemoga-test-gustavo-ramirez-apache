import React, { useState, useEffect } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import Moment from "react-moment";

import {
  VoteContainerButton,
  Button,
  Container,
  DataContainer,
  Like,
  Title,
  Description,
  Vote,
  ProgressContainer,
  Progress,
  NewVote,
} from "./styles";

export const Person = ({
  name,
  description,
  photo,
  id,
  _firstPublishedAt,
  category,
}) => {
  const initalPercent = () =>
    Number(window.localStorage.getItem("percent") || 0);
  const initialLikes = () =>
    Number(window.localStorage.getItem(`likes-${id}`) || 0);
  const initialDisLikes = () =>
    Number(window.localStorage.getItem(`dislikes-${id}`) || 0);
  const initialTotal = () =>
    Number(window.localStorage.getItem(`total-${id}`) || 0);
  const [porcentual, setPorcentual] = useState(initalPercent);
  const [approval, setApproval] = useState("");
  const [canVote, setVote] = useState(true);
  const [counter, setCounter] = useState({
    likes: initialLikes(),
    dislikes: initialDisLikes(),
    total: initialTotal(),
  });

  const submit = (e) => {
    setVote(false);

    switch (approval) {
      case "like":
        setCounter((previousState) => ({
          ...previousState,
          likes: (counter.likes += 1),
          total: (counter.total += 1),
        }));
        break;
      case "dislike":
        setCounter((previousState) => ({
          ...previousState,
          dislikes: (counter.dislikes += 1),
          total: (counter.total += 1),
        }));
        break;
      default:
        console.log("hubo un error en la app");
    }

    /*     let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("oeoeoeoe");
      }, 2000);
    });

    promise.then((response) => setVote(true)); */

    e.preventDefault();
  };

  useEffect(() => {
    let percent = Math.round((counter.likes / counter.total) * 100);
    setPorcentual(percent);
    localStorage.setItem(`likes-${id}`, counter.likes);
    localStorage.setItem(`dislikes-${id}`, counter.dislikes);
    localStorage.setItem(`total-${id}`, counter.total);
  }, [counter.likes, counter.dislikes, counter.total, id]);

  const imageBackground = photo.responsiveImage.src;

  return (
    <Container style={{ backgroundImage: `url(${imageBackground})` }}>
      <DataContainer>
        <Like positive={porcentual > 50 ? true : false}>
          <span>
            <IoMdThumbsUp color="#fff" />
          </span>
        </Like>
        <Title>
          {name}
          <small>
            <Moment fromNow>{_firstPublishedAt}</Moment> in {category}
          </small>
        </Title>

        <Description>{description}</Description>
        {canVote && (
          <Vote>
            <form onSubmit={submit}>
              <VoteContainerButton
                liked
                selected={approval === "like"}
                onClick={() => setApproval("like")}
              >
                <IoMdThumbsUp color="#fff" />
              </VoteContainerButton>
              <VoteContainerButton
                selected={approval === "dislike"}
                onClick={() => setApproval("dislike")}
              >
                <IoMdThumbsDown color="#fff" />
              </VoteContainerButton>
              <Button disabled={!canVote} type="submit">
                Vote now
              </Button>
            </form>
          </Vote>
        )}
        {!canVote && (
          <NewVote>
            <div>
              <span> Thanks for you voting!</span>
              <Button onClick={() => setVote(true)}>Vote again</Button>
            </div>
          </NewVote>
        )}
        <ProgressContainer>
          <Progress
            style={{ width: `${porcentual}%` }}
            className="progress-bar"
          ></Progress>
        </ProgressContainer>
      </DataContainer>
    </Container>
  );
};
