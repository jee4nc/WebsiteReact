import React from "react";
import "./App.css";
import AboutUs from "./components/organism/AboutUs";
import MainSection from "./components/molecules/MainSection";
import BenefitsSection from "./components/molecules/BenefitsSection";
import ContainerPlans from "./components/molecules/ContainerPlans";
import ContainerContact from "./components/molecules/ContainerContact";
// import WspButton from "./components/atoms/WspButton";

function App() {
  return (
    <>
      <MainSection />
      <AboutUs />
      <BenefitsSection />
      <ContainerPlans />
      <ContainerContact />
    </>
  );
}

export default App;
