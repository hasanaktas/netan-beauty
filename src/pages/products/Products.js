import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Page, Section, Loading } from "components";
import { useProducts, useLocale } from "hooks";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "auto",
    width: "100%",
    objectFit: "cover",
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const [locale] = useLocale();
  const { error, loading, products } = useProducts();
  let navigate = useNavigate();

  const goProduct = (id) => {
    navigate(`/urun/${id}`);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }

  return (
    <Page title={locale.pages.products}>
      <Section alternative>
        <Grid container spacing={3} justify="center">
          {products.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea onClick={() => goProduct(item.seoUrl)}>
                  <img
                    alt="Netan"
                    src={item.options[0].images[0]}
                    className={classes.media}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {locale.language === "tr" ? item.name.tr : item.name.en}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {locale.language === "tr"
                        ? item.subName.tr
                        : item.subName.en}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => goProduct(item.id)}
                  >
                    {locale.goProduct}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Page>
  );
};

export default ProductsPage;
