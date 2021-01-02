import React from "react";
import {
  Grid,
  Container,
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

const useStyles = makeStyles((theme) => ({
  contactCard: {
    display: "flex",
    margin: theme.spacing(1),
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
    margin: theme.spacing(1),
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  return (
    <Box py={5} bgcolor="white" paddingX={1} height="100%" minHeight={400}>
      <Container>
        <Grid
          container
          spacing={3}
          style={{ marginTop: "40px", marginBottom: "30px" }}
        >
          <Grid item container sm={12} md={6}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                BİZE ULAŞIN
              </Typography>
              <Box>
                <Typography>Hedefimiz olabildiğince yardımcı olmak.</Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <PhoneIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">Telefon</Typography>
                  <Typography>+90 312 442 23 27</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <PrinterIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">Fax</Typography>
                  <Typography>+90 312 442 23 51</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <MailIcon className={classes.icon} />
                </IconButton>
                <Box>
                  <Typography variant="subtitle1">E-Posta</Typography>
                  <Typography>netan@netan.com.tr</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactCard}>
                <IconButton className={classes.iconButton}>
                  <MapPinIcon className={classes.icon} />
                </IconButton>

                <Box>
                  <Typography variant="subtitle1">Adres</Typography>
                  <Typography>
                    Maltepe Mah. Gazi Mustafa Kemal Bulvarı No:47/13- Çankaya -
                    Ankara / TÜRKİYE
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
      </Container>
    </Box>
  );
};

export default ContactPage;
