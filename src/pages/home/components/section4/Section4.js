import React from "react";
import { Grid, Typography, Box, Button, Container } from "@material-ui/core";
const Section = () => {
  const products = [
    {
      name: "4x Hair Removal Laser",
      specifications: "DERMATOLOGIST - RECOMMENDED - TECHNOLOGY",
      image:
        "https://www.triabeauty.com/triawebstore2/images/2020/us/LHR/Hero/green/hrl-4x-deluxe-kit-green-2.jpg",
    },
    {
      name: "SmoothBeauty Laser",
      specifications: "DERMATOLOGIST - RECOMMENDED - TECHNOLOGY",
      image:
        "https://www.triabeauty.com/triawebstore2/images/2020/us/SRL/lilac/smoothBeauty_laser_1.jpg",
    },
    {
      name: "Hair Removal Laser Precision",
      specifications: "DERMATOLOGIST - RECOMMENDED - TECHNOLOGY",
      image:
        "https://www.triabeauty.com/triawebstore2/images/2020/us/LHR/Hero/fuchsia/hrl-4x-deluxe-kit-fuchsia-2.jpg",
    },
    {
      name: "SmoothBeauty Eye Wrinkle Laser",
      specifications: "DERMATOLOGIST - RECOMMENDED - TECHNOLOGY",
      image:
        "https://www.triabeauty.com/triawebstore2/images/2020/us/SRLP/orchid/TRIA_ADLp_bundle_2.jpg",
    },
  ];

  return (
    <Box bgcolor="#fff" paddingY={2} paddingX={1}>
      <Container>
        <Grid container spacing={3} style={{marginBottom:'70px', marginTop:'50px'}}>
          {products.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  margin={3}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginBottom={4}
                  >
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "70%", height: "auto" }}
                    />
                  </Box>

                  <Typography
                    color="primary"
                    variant="h4"
                    align="center"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    {item.specifications}
                  </Typography>
                  <Box clone marginTop={2}>
                    <Button variant="contained" style={{backgroundColor:"#FF64CB", width:'80%', fontSize:'18px'}} >
                      SATIN AL
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
