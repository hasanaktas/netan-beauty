import React from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Printer as PrinterIcon,
} from "react-feather";
import { Loading, Page, Section } from "components";
import { useDetails, useLocale } from "hooks";
const useStyles = makeStyles((theme) => ({
  contactCard: {
    display: "flex",
    marginTop: theme.spacing(4),
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(0),

    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "#FF64CB",
    marginRight: theme.spacing(2),
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  const [locale] = useLocale();
  const { error, loading, details } = useDetails();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }

  return (
    <Page title={locale.pages.contact}>
      <Section alternative>
        <Grid container spacing={3}>
          <Grid item container sm={12} md={6}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                {locale.pages.contact}
              </Typography>
              <Box>
                <Typography>
                  {details.contact.title[locale.language]}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <PhoneIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">
                    {locale.contact.phone}
                  </Typography>
                  <Typography>{details.contact.phone}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <PrinterIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">
                    {locale.contact.fax}
                  </Typography>
                  <Typography>{details.contact.fax}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <MailIcon className={classes.icon} />
                </IconButton>
                <Box>
                  <Typography variant="subtitle1">
                    {locale.contact.email}
                  </Typography>
                  <Typography>{details.contact.email}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <MapPinIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">
                    {locale.contact.adress}
                  </Typography>
                  <Typography>
                    {details.contact.adress[locale.language]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.402818383438!2d32.875468150981675!3d39.932378479323354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e159e9c591b%3A0x11c701a26f13be03!2sAnkaray%20Dikimevi%20%C4%B0stasyonu!5e0!3m2!1str!2str!4v1608783314609!5m2!1str!2str"
                width={"100%"}
                height={"500"}
                title="My Daily Marathon Tracker"
                frameBorder={0}
                tabIndex={0}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default ContactPage;
