import React from "react";
import "./App.css";
import AboutUs from "./components/molecules/AboutUs";
import MainSection from "./components/molecules/MainSection";
import WspButton from "./components/atoms/WspButton";

function App() {
  return (
    <>
      <MainSection />
      <WspButton />
      <AboutUs />
    </>
  );
}

export default App;
