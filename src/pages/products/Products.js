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
import { Page, Section } from "components";
import { useLocale, useFirebase } from "hooks";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    width: "auto",
    objectFit: "cover",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  actionArea: {
    overflow: "hidden",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const [locale] = useLocale();
  const { products } = useFirebase();
  let navigate = useNavigate();

  const goProduct = (id) => {
    navigate(`/urun/${id}`);
  };

  return (
    <Page title={locale.pages.products}>
      <Section alternative>
        <Grid container spacing={3} justify="center">
          {products.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <Card className={classes.card}>
                <CardActionArea
                  onClick={() => goProduct(item.seoUrl)}
                  className={classes.actionArea}
                >
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
                    variant="contained"
                    fullWidth
                    size="small"
                    color="primary"
                    onClick={() => goProduct(item.seoUrl)}
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
