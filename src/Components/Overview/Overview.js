import React from "react";
import About from "./About";
import CallBack from "./CallBack";
import Carouse from "./Carouse";
import OverMapsection from "./OverMapsection";
import './Overview.css';
function Index() {
  return (
    <div>
      <Carouse />
      <OverMapsection />
      <CallBack />
      <About />
    </div>
  );
}

export default Index;
