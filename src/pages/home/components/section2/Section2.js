import React from "react";
import { Grid, Typography, Box, Container } from "@material-ui/core";
const Section = () => {
  return (
    <Box bgcolor="secondary.main" paddingY={2} paddingX={1}>
      <Container>
        <Grid container spacing={3}>
          <Box clone order={{ xs: 2, sm: 1 }}>
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
                  No appointments, no waiting
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  Enjoy the luxury of professional self-care treatments in the
                  comfort and privacy of your home,at home, one your schedule.
                  Self-care made simpler
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 2 }}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <img
                  alt="tria"
                  style={{ width: "60%", height: "auto" }}
                  src="https://www.triabeauty.com/triawebstore2/images/2020/us/Tria_model_rd.png"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
