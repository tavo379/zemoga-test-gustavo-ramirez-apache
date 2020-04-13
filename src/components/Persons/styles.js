import styled from "styled-components";

export const PersonsContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    max-width: 90% !important;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SubmitPerson = styled.div`
  position: relative;
  margin: 0 auto;
  width: 50%;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 90% !important;
    .first-column {
      font-size: 16px !important;
      width: 50% !important;
    }

    .second-column {
      position: relative;
      z-index: 20;
      button {
        font-size: 16px !important;
        padding: 10px 15px;
      }
    }
  }
  .overlay {
    position: absolute;
    background-color: #ffffffbf;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    object-fit: cover;
  }
  .first-column {
    font-size: 30px;
    width: 70%;
    position: relative;
    z-index: 20;
  }
  .second-column {
    position: relative;
    z-index: 20;
    button {
      font-size: 20px;
      padding: 10px 15px;
      color: #383333;
      border: 3px solid #383333;
    }
  }
`;
