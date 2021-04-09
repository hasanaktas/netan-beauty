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
  ListItemText,
  Menu,
  Drawer,
  List,
  ListItem,
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
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const Topbar = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [locale, setLocale] = useLocale();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
    <>
      <AppBar
        position="fixed"
        color="default"
        className={classes.root}
        elevation={0}
      >
        <Container>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Box onClick={() => navigate("/")}>
              <Typography
                variant="h6"
                color="primary"
                align="left"
                className={classes.title}
              >
                Netan Beauty
              </Typography>
            </Box>
            <Box flex={1} />
            <Hidden smDown>
              <Button
                color="primary"
                style={{ fontSize: "18px" }}
                onClick={() => navigate("/urunler")}
              >
                {locale.pages.products}
              </Button>
              <Button
                color="primary"
                style={{ fontSize: "18px" }}
                onClick={() => navigate("/hakkimizda")}
              >
                {locale.pages.about}
              </Button>
              <Button
                color="primary"
                style={{ fontSize: "18px" }}
                onClick={() => navigate("/sss")}
              >
                SSS
              </Button>
              <Button
                color="primary"
                style={{ fontSize: "18px" }}
                onClick={() => navigate("/fda")}
              >
                FDA
              </Button>
              <Button
                color="primary"
                style={{ fontSize: "18px" }}
                onClick={() => navigate("/iletisim")}
              >
                {locale.pages.contact}
              </Button>
            </Hidden>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              onClick={handleClick}
              startIcon={<TranslateIcon />}
              endIcon={<ExpandMoreIcon />}
              variant="text"
              style={{ marginLeft: 20, fontSize: "18px" }}
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
                <TurkishFlag
                  style={{ marginRight: 20, width: 24, height: 24 }}
                />
                Türkçe
              </MenuItem>
              <MenuItem onClick={handleCloseEN}>
                <EnglishFlag
                  style={{ marginRight: 20, width: 24, height: 24 }}
                />
                English
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box width="100%" display="flex" p={2} mt={1}>
          <Typography
            variant="h6"
            color="primary"
            align="left"
            className={classes.title}
            onClick={() => {
              navigate("/");
              setMobileMenuOpen(false);
            }}
          >
            Netan Beauty
          </Typography>
        </Box>

        <List>
          <ListItem
            button
            onClick={() => {
              navigate("/urunler");
              setMobileMenuOpen(false);
            }}
          >
            <ListItemText primary={locale.pages.products} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/hakkimizda");
            }}
          >
            <ListItemText primary={locale.pages.about} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/sss");
            }}
          >
            <ListItemText primary="SSS" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/fda");
            }}
          >
            <ListItemText primary="FDA" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/iletisim");
            }}
          >
            <ListItemText primary={locale.pages.contact} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Topbar;
