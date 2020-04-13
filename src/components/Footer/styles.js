import styled from "styled-components";

export const Footer = styled.footer`
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  padding: 40px 0;
  border-top: 1px dotted #000;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100% !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;

    div {
      margin-top: 20px;
    }
  }
  div {
    display: flex;
    color: #827e7e;
    font-size: 13px;
    align-items: center;
    svg {
      margin-left: 25px;
    }
  }
  ul {
    display: flex;
    li {
      color: #827e7e;
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;
