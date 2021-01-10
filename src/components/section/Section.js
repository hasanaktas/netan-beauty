import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  mini: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  alternative: {
    backgroundColor: theme.palette.alternative,
  },
  alternative2: {
    backgroundColor: "#D76AEB",
  },
  alternative3: {
    backgroundColor: "#e040fb",
  },
}));
const Section = (props) => {
  const classes = useStyles();
  const {
    children,
    alternative,
    maxWidth,
    mini,
    alternative2,
    alternative3,
  } = props;
  return (
    <section
      className={clsx(
        classes.root,
        alternative && classes.alternative,
        alternative2 && classes.alternative2,
        alternative3 && classes.alternative3,
        mini && classes.mini
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
};

export default Section;
