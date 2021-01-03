import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  ButtonBase,
  Box,
  Divider,
  makeStyles,
  Chip,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { icons } from "configs";
import { useLocale } from "hooks";
import { ImageSlider } from "../../components";

const useStyles = makeStyles((theme) => ({
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
}));

const MainSection = (props) => {
  const [locale] = useLocale();
  const { product } = props;
  const [selectedVariant, setSelectedVariant] = useState(0);
  const classes = useStyles();
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={6}>
        <ImageSlider images={product.options[selectedVariant].images} />
      </Grid>
      <Grid item container xs={12} md={6} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            {locale.language === "tr" ? product.name.tr : product.name.en}
          </Typography>
          <Typography variant="body1">
            {locale.language === "tr" ? product.subName.tr : product.subName.en}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" className={classes.pseudoPrice}>
              {product.price.pseudo} TL
            </Typography>

            <Typography variant="h4" color="primary">
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
                <Box key={index} borderRadius={10} mr={1} mt={2}>
                  <Chip
                    style={{ padding: 10 }}
                    variant="outlined"
                    icon={<Icon />}
                    label={
                      locale.language === "tr" ? item.title.tr : item.title.en
                    }
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap">
            {product.options[selectedVariant].saleChannel.map((item, index) => {
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
              return null;
            })}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            startIcon={<ArrowForwardIosIcon />}
            variant="contained"
            color="primary"
            fullWidth
          >
            {locale.greatePrice}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainSection;
