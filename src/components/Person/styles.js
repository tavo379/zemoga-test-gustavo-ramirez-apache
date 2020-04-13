import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: grid;
  height: 500px;
  position: relative;
  max-width: 100%;
`;
export const DataContainer = styled.div`
  display: grid;
  background: rgb(0, 0, 0);
  background: linear-gradient(360deg, black, transparent);
  backdrop-filter: blur(5px);
  height: 50%;
  grid-template-columns: 10% 90%;
  grid-template-rows: auto auto auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    "like title"
    "like description"
    "like vote"
    "progress progress";
`;

export const Like = styled.div`
  grid-area: like;
  position: relative;
  span {
    background-color: ${(props) =>
      props.positive ? "#1cbbb4cc" : "#ffad1dd4"};
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  grid-area: title;
  filter: blur(0);
  text-align: left;
  font-size: 30px;
  font-weight: 300;
  small {
    font-size: 11px;
    time {
      font-weight: bold;
    }
  }
`;

export const Description = styled.p`
  grid-area: description;
  text-align: left;
`;

export const Vote = styled.div`
  display: flex;
  grid-area: vote;
  text-align: left;
  form {
    display: flex;
    height: 40px;
  }
`;

export const ProgressContainer = styled.div`
  grid-area: progress;
  background: #ffad1dd4;
  bottom: 0;
  height: 25px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Progress = styled.div`
  background: #1cbbb4cc;
  height: 25px;
`;

export const Button = styled.button`
  border: 1px solid #fff;
  color: #fff;
  padding: 10px;
`;

export const VoteContainerButton = styled.div`
  background: ${(props) => (props.liked ? "#1cbbb4cc" : "#ffad1dd4")};
  padding: 10px;
  margin-right: 10px;
  border: ${(props) =>
    props.selected ? "2px solid white" : "2px solid transparent"};
`;

export const NewVote = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    margin-bottom: 30px;
  }
  Button {
    padding: 10px 10px;
    width: fit-content;
  }
`;
