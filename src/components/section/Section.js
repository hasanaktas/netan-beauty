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
}));
const Section = (props) => {
  const classes = useStyles();
  const { children, alternative, maxWidth, mini } = props;
  return (
    <section
      className={clsx(
        classes.root,
        alternative && classes.alternative,
        mini && classes.mini
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
};

export default Section;
