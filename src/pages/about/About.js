import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { Page, Section } from "components";
import { useLocale, useFirebase } from "hooks";
const AboutPage = () => {
  const [locale] = useLocale();
  const { details } = useFirebase();

  return (
    <Page title={locale.pages.about}>
      <Section alternative>
        <Grid container spacing={3}>
          <Grid item sm={12} md={5}>
            <Typography variant="h4" gutterBottom>
              {locale.pages.about}
            </Typography>
            <Box>
              <Typography>
                {locale.language === "tr"
                  ? details.about.content.tr
                  : details.about.content.en}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "40px" }}>
            <Box borderRadius={10} margin={0} padding={2} bgcolor="#F6D1EF">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
			  AAAAAAAA
                <iframe
                  title="introVideo"
                  width="565"
                  height="345"
                  src="https://www.youtube.com/embed/IEI3OUxDyHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default AboutPage;
