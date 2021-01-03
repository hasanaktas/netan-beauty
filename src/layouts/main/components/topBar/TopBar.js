import React, { useState } from "react";
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
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocale } from "hooks";
import { TurkishFlag, EnglishFlag } from "../flags";
import {
  Translate as TranslateIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

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
  const [locale, setLocale] = useLocale();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseTR = () => {
    setLocale("tr");
    setAnchorEl(null);
  };
  const handleCloseEN = () => {
    setLocale("en");
    setAnchorEl(null);
  };
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
              {locale.pages.products}
            </Button>
            <Button color="inherit" onClick={() => navigate("/hakkimizda")}>
              {locale.pages.about}
            </Button>
            <Button color="inherit" onClick={() => navigate("/iletisim")}>
              {locale.pages.contact}
            </Button>
          </Hidden>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<TranslateIcon />}
            endIcon={<ExpandMoreIcon />}
            variant="text"
            style={{ marginLeft: 20 }}
          >
            {locale.languageLong}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseTR}>
              <TurkishFlag style={{ marginRight: 20, width: 24, height: 24 }} />
              Türkçe
            </MenuItem>
            <MenuItem onClick={handleCloseEN}>
              <EnglishFlag style={{ marginRight: 20, width: 24, height: 24 }} />
              English
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
