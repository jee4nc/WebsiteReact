import React from "react";
import "./App.css";
import AboutUs from "./components/organism/AboutUs";
import MainSection from "./components/molecules/MainSection";
import Another from "./components/molecules/Another";
import Zoom from "react-reveal/Zoom";
// import WspButton from "./components/atoms/WspButton";

function App() {
  return (
    <>
      <MainSection />
      <AboutUs />
      <Another />
    </>
  );
}

export default App;
