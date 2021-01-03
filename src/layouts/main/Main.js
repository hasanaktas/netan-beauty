import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, TopBar } from "./components";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <Box className={classes.main}>
        <Outlet />
      </Box>

      <Footer />
    </div>
  );
};

export default MainLayout;
