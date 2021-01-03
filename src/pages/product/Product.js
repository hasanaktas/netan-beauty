import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "hooks";
import { Page, Section } from "components";
import {
  MainSection,
  BoxesSection,
  PromotionSection,
  SkinToneSection,
} from "./sections";

const ProductPage = () => {
  const { productId } = useParams();
  const { error, loading, product } = useProduct(productId);

  if (loading) {
    return <div>Yukleniyor</div>;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }
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
