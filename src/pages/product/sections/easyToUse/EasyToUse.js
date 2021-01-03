import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  Box,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import clsx from "clsx";
import { useFirebase, useLocale } from "hooks";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  swiper: {
    width: "100%",
    position: "relative",
  },
  img: {
    width: "100%",
    height: 600,
    objectFit: "cover",
    display: "block",
  },

  titleContainer: {
    height: "100%",
    display: "flex",
    left: theme.spacing(40),
  },
  leftArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: theme.spacing(0),
    display: "flex",
    alignItems: "center",
  },
  rightArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: theme.spacing(0),
    display: "flex",
    alignItems: "center",
  },

  iconButtonIcon: {
    fontSize: 50,
  },
  actives: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
  activesCard: {
    width: 20,
    height: 5,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgb(230,230,230)",
  },
  activeCard: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const EasyToUse = (props) => {
  const { product } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [locale] = useLocale();
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const downStepChange = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    } else {
      setActiveStep(product.easyToUse.length - 1);
    }
  };

  const upStepChange = () => {
    if (activeStep !== product.easyToUse.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(0);
    }
  };

  return (
    <Box bgcolor="#fff">
      <Container>
        <Box position="relative">
          <AutoPlaySwipeableViews
            interval={7000}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {product.easyToUse.map((item, index) => (
              <Grid container key={index}>
                <Box clone order={{ xs: 2, sm: 2, md: 1 }} padding={4}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                      paddingLeft={4}
                      paddingRight={4}
                      flexDirection="column"
                    >
                      <Typography variant="h4" align="center" color="primary">
                        {item.title[locale.language]}
                      </Typography>
                      <Typography variant="h6" align="center">
                        {item.subTitle[locale.language]}
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                    >
                      <img
                        alt="tria"
                        style={{ width: "75%", height: "auto" }}
                        src={item.images[0]}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
          <Box className={classes.actives}>
            {product.easyToUse.map((item, index) => {
              return (
                <Box
                  key={index}
                  className={clsx(
                    classes.activesCard,
                    activeStep === index && classes.activeCard
                  )}
                />
              );
            })}
          </Box>

          <Box className={classes.leftArrow}>
            <IconButton size="small" color="primary" onClick={downStepChange}>
              <ArrowLeft className={classes.iconButtonIcon} />
            </IconButton>
          </Box>
          <Box className={classes.rightArrow}>
            <IconButton size="small" color="primary" onClick={upStepChange}>
              <ArrowRight className={classes.iconButtonIcon} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EasyToUse;
