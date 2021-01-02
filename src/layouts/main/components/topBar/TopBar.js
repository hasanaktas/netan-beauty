import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 1px 10px -6px rgba(163,163,163,1)",
    backgroundColor: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor: "pointer",
    alignSelf: "flex-start",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      color="default"
      className={classes.root}
      elevation={0}
    >
      <Container>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box onClick={() => navigate("/")} flex={1} display="flex">
            <Typography
              variant="h6"
              color="primary"
              align="left"
              className={classes.title}
            >
              Netan Beauty
            </Typography>
          </Box>
          <Hidden xsDown>
            <Button color="inherit" onClick={() => navigate("/urunler")}>
              ÜRÜNLER
            </Button>
            <Button color="inherit" onClick={() => navigate("/hakkimizda")}>
              HAKKIMIZDA
            </Button>
            <Button color="inherit" onClick={() => navigate("/iletisim")}>
              İLETİŞİM
            </Button>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
