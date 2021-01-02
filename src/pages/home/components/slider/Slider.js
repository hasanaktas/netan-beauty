import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  IconButton,
  Box,
  Grid,
  Container,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import clsx from "clsx";
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
  imgOverlay: {
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    height: " 100%",
    width: "100%",
    zIndex: 100,
    flexDirection: "column",
  },
  imageOverlayContainer: {
    maxWidth: 1300,
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
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
    left: theme.spacing(-2),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      left: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      left: theme.spacing(-10),
    },
  },
  rightArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: theme.spacing(-2),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      right: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      right: theme.spacing(-10),
    },
  },
  iconButton: {
    backgroundColor: "#FF64CB",
    padding: 2,
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
    width: 30,
    height: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgb(230,230,230)",
  },
  activeCard: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const slides = [
  {
    image:
      "https://www.triabeauty.com/triawebstore2/images/2020/us/HRLP/dove/hrl_precision_1.jpg",
  },
  {
    image:
      "https://www.triabeauty.com/triawebstore2/images/2020/us/LHR/Hero/fuchsia/hrl-4x-deluxe-kit-fuchsia-3.jpg",
  },
];

const SectionSlider = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const downStepChange = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    } else {
      setActiveStep(slides.length - 1);
    }
  };

  const upStepChange = () => {
    if (activeStep !== slides.length - 1) {
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
            {slides.map((item, index) => (
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
                      <Typography variant="h2" align="center">
                        Netan Beauty
                      </Typography>
                      <Typography variant="h6" align="center">
                        Test Yazisi Test Yazisi Test Yazisi
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
                        src={item.image}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
          <Box className={classes.actives}>
            {slides.map((item, index) => {
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
            <IconButton
              size="medium"
              aria-label="delete"
              color="primary"
              onClick={downStepChange}
              className={classes.iconButton}
            >
              <ArrowLeft className={classes.iconButtonIcon} />
            </IconButton>
          </Box>
          <Box className={classes.rightArrow}>
            <IconButton
              size="medium"
              color="primary"
              aria-label="delete"
              onClick={upStepChange}
              className={classes.iconButton}
            >
              <ArrowRight className={classes.iconButtonIcon} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSlider;
