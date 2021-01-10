import React from "react";
import { Grid, Typography, Box, Button, makeStyles } from "@material-ui/core";
import { useFirebase, useLocale } from "hooks";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    width: "auto",
    objectFit: "cover",
  },
}));

const ProductsSection = () => {
  const [locale] = useLocale();
  const { products } = useFirebase();
  let navigate = useNavigate();
  const classes = useStyles();
  const goProduct = (id) => {
    navigate(`/urun/${id}`);
  };

  return (
    <Grid container spacing={3} justify="center">
      {products.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              justifyContent="center"
              alignItems="center"
              margin={3}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={4}
              >
                <img
                  alt={item.name.tr}
                  src={item.options[0].images[0]}
                  className={classes.media}
                />
              </Box>

              <Typography
                color="primary"
                variant="h4"
                align="center"
                gutterBottom
              >
                {item.name[locale.language]}
              </Typography>
              <Typography variant="subtitle2" align="center" gutterBottom>
                {item.subName[locale.language]}
              </Typography>
              <Box clone marginTop={2}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={() => goProduct(item.seoUrl)}
                >
                  {locale.buy}
                </Button>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductsSection;
