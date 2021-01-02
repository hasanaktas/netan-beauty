import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
  Box,
  Divider,
  Chip,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useProduct, useLocale } from "hooks";
import { Page } from "components";
import { icons } from "configs";
import { ImageSlider } from "./components";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    backgroundColor: "#fff",
    paddingBottom: theme.spacing(4),
  },
  pseudoPrice: {
    textDecoration: "line-through",
    marginRight: theme.spacing(1),
  },
}));

const ProductPage = () => {
  const classes = useStyles();
  const [locale] = useLocale();
  const { productId } = useParams();
  const { error, loading, product } = useProduct(productId);
  const [selectedVariant, setSelectedVariant] = useState(0);
  if (loading) {
    return <div>Yukleniyor</div>;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }
  return (
    <Page title="Product" className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ImageSlider images={product.options[selectedVariant].images} />
          </Grid>
          <Grid item container xs={12} md={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                {locale.language === "tr" ? product.name.tr : product.name.en}
              </Typography>
              <Typography variant="body1">
                {locale.language === "tr"
                  ? product.subName.tr
                  : product.subName.en}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex">
                <Typography variant="h6" className={classes.pseudoPrice}>
                  {product.price.pseudo} TL
                </Typography>

                <Typography variant="h5" color="primary">
                  {product.price.normal} TL
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex">
                {product.options.map((item, index) => (
                  <Box
                    key={index}
                    bgcolor={item.color}
                    width={40}
                    height={40}
                    marginRight={1}
                    borderRadius={10}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedVariant(index)}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexWrap="wrap">
                {product.properties.map((item, index) => {
                  const Icon = icons[item.icon];
                  return (
                    <Box borderRadius={10} mr={1} mt={2}>
                      <Chip
                        style={{ padding: 10 }}
                        variant="outlined"
                        icon={<Icon />}
                        label={
                          locale.language === "tr"
                            ? item.title.tr
                            : item.title.en
                        }
                      />
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                {locale.saleChannels}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductPage;
