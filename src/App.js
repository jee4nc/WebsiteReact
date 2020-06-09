import React from "react";
import "./App.css";
import AboutUs from "./components/organism/AboutUs";
import MainSection from "./components/molecules/MainSection";
import BenefitsSection from "./components/molecules/BenefitsSection";
import ContainerPlans from "./components/molecules/ContainerPlans";
import ContactUs from "./components/molecules/ContacUs";
// import WspButton from "./components/atoms/WspButton";

function App() {
  return (
    <>
      <MainSection />
      <AboutUs />
      <BenefitsSection />
      <ContainerPlans />
      <ContactUs />
    </>
  );
}

export default App;
