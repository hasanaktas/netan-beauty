import React from "react";
import { useParams } from "react-router-dom";
import { useProduct, useFirebase } from "hooks";
import { Page, Section, Loading } from "components";
import {
  MainSection,
  BoxesSection,
  PromotionSection,
  SkinToneSection,
} from "./sections";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useFirebase();
  const product = products.filter((item) => item.seoUrl === productId)[0];

  return (
    <Page title="Product">
      <Section>
        <MainSection product={product} />
      </Section>
      <Section alternative>
        <BoxesSection product={product} />
      </Section>
      <Section maxWidth="md">
        <PromotionSection product={product} />
      </Section>
      <Section alternative>
        <SkinToneSection />
      </Section>
    </Page>
  );
};

export default ProductPage;
