import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Container,
  Box,
  IconButton,
} from "@material-ui/core";

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
} from "react-feather";
const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#fffaff",
    paddingTop: theme.spacing(3),
  },
  marketplace: {
    width: 100,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    height: "auto",
  },
  contactText: {
    color: "black",
    marginBottom: 10,
  },
  socialButton: {
    backgroundColor: "#FF64CB",

    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [values] = useState({
    phone: "0544",
    fax: "622",
    email: "33",
    adressTR: "23",
    adressEN: "32",
  });

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom>
              SATIŞ KANALLARIMIZ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="hepsiburada"
                src="/static/images/marketplace/hepsiburada.png"
                className={classes.marketplace}
              />
              <img
                alt="trendyol"
                src="/static/images/marketplace/trendyol.png"
                className={classes.marketplace}
              />
              <img
                alt="n11"
                src="/static/images/marketplace/n11.png"
                className={classes.marketplace}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor="#F6D1EF" width="100%" marginTop={3}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <Box
                display="flex"
                width="100%"
                marginLeft={3}
                marginTop={3}
                marginBottom={2}
              >
                <Typography variant="subtitle1" className={classes.contactText}>
                  BİZİ TAKİP EDİN
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                padding={0}
              >
                <IconButton className={classes.socialButton}>
                  <FacebookIcon />
                </IconButton>
                <IconButton className={classes.socialButton}>
                  <InstagramIcon />
                </IconButton>
                <IconButton className={classes.socialButton}>
                  <TwitterIcon />
                </IconButton>
                <IconButton className={classes.socialButton}>
                  <YoutubeIcon />
                </IconButton>
              </Box>
              <Box display="flex" width="100%" marginLeft={3} marginTop={3}>
                <Typography variant="subtitle1" className={classes.contactText}>
                  www.netanbeauty.com
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box display="flex" flexDirection="column" padding={3}>
                <Typography variant="subtitle1" className={classes.contactText}>
                  İletişim
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  Telefon : {values.phone}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  Fax : {values.fax}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  E-posta : {values.email}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  Adres : {values.adressTR}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
