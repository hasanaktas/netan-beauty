import React from "react";
import { Page, Section } from "components";
import { MainSection, ProductsSection, SliderSection } from "./sections";
const Home = () => {
  return (
    <Page title="Netan Beauty">
      <SliderSection />
      <MainSection />
      <Section>
        <ProductsSection />
      </Section>
    </Page>
  );
};

export default Home;
