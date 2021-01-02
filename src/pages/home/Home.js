import React from "react";
import { Page } from "components";
import { Section1, Section2, Section3, Section4, Slider } from "./components";
const Home = () => {
  return (
    <Page title="Anasayfa">
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
    </Page>
  );
};

export default Home;
