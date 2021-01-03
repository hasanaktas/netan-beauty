import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Container,
  Box,
  ButtonBase,
  IconButton,
} from "@material-ui/core";

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
} from "react-feather";
import { useLocale, useFirebase } from "hooks";
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

  const { details } = useFirebase();

  const [locale] = useLocale();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom>
              {locale.saleChannels}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              <ButtonBase
                onClick={() =>
                  window.open(
                    `https://${details.contact.marketplace.hepsiburada}`,
                    "_blank"
                  )
                }
              >
                <img
                  alt="hepsiburada"
                  src="/static/images/marketplace/hepsiburada.png"
                  className={classes.marketplace}
                />
              </ButtonBase>
              <ButtonBase
                onClick={() =>
                  window.open(
                    `https://${details.contact.marketplace.trendyol}`,
                    "_blank"
                  )
                }
              >
                <img
                  alt="trendyol"
                  src="/static/images/marketplace/trendyol.png"
                  className={classes.marketplace}
                />
              </ButtonBase>
              <ButtonBase
                onClick={() =>
                  window.open(
                    `https://${details.contact.marketplace.n11}`,
                    "_blank"
                  )
                }
              >
                <img
                  alt="n11"
                  src="/static/images/marketplace/n11.png"
                  className={classes.marketplace}
                />
              </ButtonBase>
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
                  {locale.followUs}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                padding={0}
              >
                <IconButton
                  className={classes.socialButton}
                  onClick={() =>
                    window.open(
                      `https://${details.contact.social.facebook}`,
                      "_blank"
                    )
                  }
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  className={classes.socialButton}
                  onClick={() =>
                    window.open(
                      `https://${details.contact.social.instagram}`,
                      "_blank"
                    )
                  }
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  className={classes.socialButton}
                  onClick={() =>
                    window.open(
                      `https://${details.contact.social.twitter}`,
                      "_blank"
                    )
                  }
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  className={classes.socialButton}
                  onClick={() =>
                    window.open(
                      `https://${details.contact.social.youtube}`,
                      "_blank"
                    )
                  }
                >
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
                  {locale.pages.contact}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  {locale.contact.phone} : {details.contact.phone}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  {locale.contact.fax} :{details.contact.fax}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  {locale.contact.email} : {details.contact.email}
                </Typography>
                <Typography variant="subtitle2" className={classes.contactText}>
                  {locale.contact.adress} :{" "}
                  {details.contact.adress[locale.language]}
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
