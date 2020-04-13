import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
/* import logo from "./logo.svg"; */
import "./App.css";

import { FooterContainer } from "./components/Footer";
import { HeroData } from "./components/Hero";
import { PersonsData } from "./components/Persons";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HeroData />
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <PersonsData className="main-container" />
        <FooterContainer />
      </div>
    </>
  );
};

export default App;
