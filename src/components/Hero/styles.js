import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 90vh;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px) {
    height: auto;
    background-size: cover;
  }
`;

export const HeroInfo = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    width: 80%;
    .content {
      h2 {
        font-size: 25px !important;
      }
      .veredict {
        font-size: 16px !important;
      }
    }
  }
  .info-container {
    position: relative;
    width: 500px;
    height: 450px;
  }
  .blur {
    background: #4c4c4ca3;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .content {
    color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 40px;
    h2 {
      font-size: 50px;
    }

    p {
      text-align: left;
    }
    .more-info,
    .veredict {
      margin-top: 30px;
    }

    .veredict {
      font-size: 30px;
    }

    .more-info {
      display: flex;
      align-items: center;
      text-decoration: underline;
      font-weight: 100;
      img {
        margin-right: 5px;
      }
      a {
        color: white;
      }
    }
  }

  .vote-group {
    display: flex;
    height: 20%;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media only screen and (max-width: 600px) {
      height: 10% !important;
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
  }
`;

export const VotingButton = styled.span`
  color: #fff;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  background: ${(props) => (props.liked ? "#1cbbb4cc" : "#ffad1dd4")};
  width: 50%;
  cursor: pointer;
`;

export const AditionalInfo = styled.div`
  display: flex;
  background-color: #ebebeb;
  color: #000;
  width: 50%;
  margin: 0 auto;
  padding: 20px 10px;
  @media only screen and (max-width: 600px) {
    width: 100% !important;

    .first-column {
      color: #383333;
      display: flex;
      flex-direction: column;
      width: 50% !important;
      span {
        display: block;
        font-size: 20px !important;
        font-weight: bold;
      }
      span:first-child {
        font-weight: 100;
        font-size: 15px;
      }
    }
  }

  .first-column {
    color: #383333;
    display: flex;
    flex-direction: column;
    width: 40%;
    span {
      display: block;
      font-size: 30px;
      font-weight: bold;
    }
    span:first-child {
      font-weight: 100;
      font-size: 15px;
    }
  }
  .second-column {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-left: 1%;
    text-align: left;
  }

  .third-column {
    display: flex;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
`;
