import React  from 'react';
import Nav from "./components/Nav/Nav.js";
import HeroSection from "./components/HeroSection/HeroSection";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Services from "./components/Services/Services.js";
import Experience from "./components/Experience/Experience.js";
import BrandAndCompany from "./components/BrandAndCompany/BrandAndCompany.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import Fotter from "./components/Fotter/Fotter.js";

function App() {
  const [themeColor,setTheme]= useState(false);

  return (
    <>
      <ThemeProvider
        theme={{
          textcolor:themeColor?"black":"white",
          primaryColor: themeColor?"#f5c32c":"red",
          secondaryColor:themeColor?"#ddf8fe":"black",
        }}
      >
        <GlobalStyle />
        <Nav setTheme={setTheme} />
        <HeroSection />
        <Services />
        <Experience/>
        <BrandAndCompany />
        <Projects />
        <Contact />
        <Fotter />
      </ThemeProvider>
    </>
  );
}

export default App;
