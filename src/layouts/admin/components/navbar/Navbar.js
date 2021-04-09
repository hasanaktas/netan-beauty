import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  MapPin as MapPinIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  List as ListIcon,
} from "react-feather";

import NavItem from "./NavItem";

const user = {
  jobTitle: "HM Software",
  name: "Netan Beauty",
};

const items = [
  {
    href: "/admin/home",
    icon: HomeIcon,
    title: "Anasayfa",
  },
  {
    href: "/admin/about",
    icon: BarChartIcon,
    title: "Hakkımızda",
  },

  {
    href: "/admin/products",
    icon: ShoppingBagIcon,
    title: "Ürünler",
  },
  {
    href: "/admin/sss",
    icon: ListIcon,
    title: "SSS",
  },
  {
    href: "/admin/fda",
    icon: InfoIcon,
    title: "FDA",
  },
  {
    href: "/admin/contact",
    icon: MapPinIcon,
    title: "İletişim",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
