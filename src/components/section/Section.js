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
  alternative: {
    backgroundColor: theme.palette.alternative,
  },
}));
const Section = (props) => {
  const classes = useStyles();
  const { children, alternative, maxWidth } = props;
  return (
    <section className={clsx(classes.root, alternative && classes.alternative)}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
};

export default Section;
