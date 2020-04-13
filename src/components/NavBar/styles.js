import styled from "styled-components";

export const NavContainer = styled.div`
  align-items: center;
  background: linear-gradient(180deg, black, transparent);
  display: flex;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;

    .menu-container {
      justify-content: space-evenly !important;
      width: 100% !important;
    }
  }

  .menu-container {
    align-items: center;
    color: #fff;
    display: flex;
    width: 50%;
    justify-content: space-between;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
