import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
  Paper,
  ButtonBase,
  Box,
  Divider,
  Chip,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useProduct, useLocale } from "hooks";
import { Page } from "components";
import { icons } from "configs";
import { ImageSlider } from "./components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
  marketPlaceButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: 10,
  },
  marketPlace: {
    width: 100,
    height: "auto",
  },
  box: {
    height: "100%",
    borderRadius: 10,
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
              <Box display="flex" flexWrap="wrap">
                {product.options[selectedVariant].saleChannel.map(
                  (item, index) => {
                    if (item.shop === "hepsiburada" && item.link.length > 0) {
                      return (
                        <ButtonBase
                          key={index}
                          onClick={() =>
                            window.open(`https://${item.link}`, "_blank")
                          }
                          className={classes.marketPlaceButton}
                        >
                          <img
                            alt="hepsiburada"
                            src="/static/images/marketplace/hepsiburada.png"
                            className={classes.marketPlace}
                          />
                        </ButtonBase>
                      );
                    }
                    if (item.shop === "trendyol" && item.link.length > 0) {
                      return (
                        <ButtonBase
                          key={index}
                          onClick={() =>
                            window.open(`https://${item.link}`, "_blank")
                          }
                          className={classes.marketPlaceButton}
                        >
                          <img
                            alt="trendyol"
                            src="/static/images/marketplace/trendyol.png"
                            className={classes.marketPlace}
                          />
                        </ButtonBase>
                      );
                    }
                    if (item.shop === "n11" && item.link.length > 0) {
                      return (
                        <ButtonBase
                          key={index}
                          onClick={() =>
                            window.open(`https://${item.link}`, "_blank")
                          }
                          className={classes.marketPlaceButton}
                        >
                          <img
                            alt="n11"
                            src="/static/images/marketplace/n11.png"
                            className={classes.marketPlace}
                          />
                        </ButtonBase>
                      );
                    }
                  }
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<ArrowForwardIosIcon />}
                variant="contained"
                color="primary"
                fullWidth
              >
                AVANTAJLI FİYAT İÇİN İLETİŞİME GEÇİN
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3} justify="center">
            {product.boxes.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Paper className={classes.box}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      p={2}
                      height="100%"
                    >
                      <Box clone mb={2}>
                        <Icon />
                      </Box>

                      <Typography
                        align="center"
                        variant="button"
                        style={{ marginBottom: 10 }}
                      >
                        {locale.language === "tr"
                          ? item.title.tr
                          : item.title.en}
                      </Typography>

                      <Typography align="center" variant="body2">
                        {locale.language === "tr"
                          ? item.subTitle.tr
                          : item.subTitle.en}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductPage;
