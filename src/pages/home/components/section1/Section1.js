import React from "react";
import { Grid, Typography, Box, Container } from "@material-ui/core";
const Section = () => {
  return (
    <Box bgcolor="secondary.main" paddingY={2} paddingX={1}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <img
                alt="tria"
                style={{ width: "80%", height: "auto" }}
                src="https://www.triabeauty.com/triawebstore2/images/2020/us/woman-in-white-robe-putting-lotion.png"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              alignItems="center"
            >
              <Typography
                color="primary"
                variant="h4"
                align="center"
                gutterBottom
              >
                Saloon-quality technology, in your home.
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Adding more confidence and convenience to your life
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
