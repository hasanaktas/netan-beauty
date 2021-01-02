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
                src="https://www.triabeauty.com/triawebstore2/images/2020/us/HRLpADLp_composit.png"
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
                From the leaders in laser
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                A pioneer in light-based skin care technology since 2003, Tria
                Beauty was founded by the same scientists who set the gold
                standard for professional laser hair removal. Our mission is to
                help you realize your ideal skin-and self-with our
                transformative,cutting-edge technology.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
