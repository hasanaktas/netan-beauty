import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Navbar, Topbar } from "./components";
import { SnackContext } from "contexts";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    minHeight: "100vh",
    height: "100%",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",

    overflow: "auto",
  },
}));

const AdminLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [snack, setSnack] = useState({
    title: "",
    open: false,
    severity: "success",
  });

  const snackOpen = (title, severity) => {
    if (title !== "") {
      setSnack({
        title: title,
        severity: severity ? severity : "success",
        open: true,
      });
    }
  };

  const snackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack({
      title: snack.title,
      severity: snack.severity,
      open: false,
    });
  };

  return (
    <SnackContext.Provider value={{ snackOpen }}>
      <div className={classes.root}>
        <Topbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <Navbar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Outlet />
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={snack.open}
          autoHideDuration={2000}
          onClose={snackClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={snackClose}
            severity={snack.severity}
          >
            {snack.title}
          </MuiAlert>
        </Snackbar>
      </div>
    </SnackContext.Provider>
  );
};

export default AdminLayout;
