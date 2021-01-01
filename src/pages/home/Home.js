import React, { useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { Page } from "components";
import { useLocale, useProducts } from "hooks";
const HomePage = () => {
  const { error, loading, products } = useProducts();

  useEffect(() => {
    console.log(products);
  }, [products]);
  const [locale, setLocale] = useLocale();
  return (
    <Page title="Netan Beauty">
      <Button onClick={() => setLocale("tr")}>Turkish</Button>
      <Button onClick={() => setLocale("en")}>English</Button>
      <Typography>{locale.home}</Typography>
    </Page>
  );
};

export default HomePage;
