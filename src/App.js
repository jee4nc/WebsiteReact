import React from "react";
import "./App.css";
import AboutUs from "./components/organism/AboutUs";
import MainSection from "./components/molecules/MainSection";
import BenefitsSection from "./components/molecules/BenefitsSection";
// import WspButton from "./components/atoms/WspButton";

function App() {
  return (
    <>
      <MainSection />
      <AboutUs />
      <BenefitsSection />
    </>
  );
}

export default App;
