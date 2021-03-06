import React from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "hooks";
import { Page, Section } from "components";
import {
  MainSection,
  BoxesSection,
  PromotionSection,
  SkinToneSection,
  EasyToUseSection,
  GraphicSection,
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
      {product.canIUse && (
        <Section alternative>
          <SkinToneSection />
        </Section>
      )}
      {product.canGraphic && (
        <Section maxWidth="md">
          <GraphicSection />
        </Section>
      )}

      <Section alternative>
        <EasyToUseSection product={product} />
      </Section>
    </Page>
  );
};

export default ProductPage;
