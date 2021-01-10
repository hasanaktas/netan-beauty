import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Paper,
  Box,
  IconButton,
} from "@material-ui/core";
import { useLocale } from "hooks";
import { icons } from "configs";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "100%",
    borderRadius: 10,
  },
  icon: {
    fontSize: "4rem",
  },
}));

const Boxes = (props) => {
  const { product } = props;
  const classes = useStyles();
  const [locale] = useLocale();
  return (
    <Grid container spacing={3}>
      {product.boxes.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <Grid key={index} item xs={12} md={12 / product.boxes.length}>
            <Paper className={classes.box}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                height="100%"
              >
                <Box clone mb={2}>
                  <IconButton color="primary">
                    <Icon className={classes.icon} />
                  </IconButton>
                </Box>

                <Typography
                  align="center"
                  variant="button"
                  color="primary"
                  style={{ marginBottom: 10, fontSize: 18 }}
                >
                  {locale.language === "tr" ? item.title.tr : item.title.en}
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
  );
};

export default Boxes;
