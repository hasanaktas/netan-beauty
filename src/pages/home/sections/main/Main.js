import React from "react";
import { Section } from "components";
import { Typography, Grid, Box } from "@material-ui/core";
import { useFirebase, useLocale } from "hooks";
const MainSection = () => {
  const [locale] = useLocale();
  const { details } = useFirebase();

  return (
    <>
      {details.home.sections.map((item, index) => {
        return (
          <Section
            key={index}
            alternative2={index % 2 === 0}
            alternative3={index % 2 === 1}
            mini
          >
            <Grid container spacing={3}>
              <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <img
                      alt="tria"
                      style={{ width: "80%", height: "auto" }}
                      src={item.images[0]}
                    />
                  </Box>
                </Grid>
              </Box>
              <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                <Grid item xs={12} md={6}>
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
                      style={{ color: "#fff" }}
                      align="center"
                      gutterBottom
                    >
                      {item.title[locale.language]}
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                      {item.subTitle[locale.language]}
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Section>
        );
      })}
    </>
  );
};

export default MainSection;
