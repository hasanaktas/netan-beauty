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
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="/static/images/fda-logo.png"
                style={{ width: 300, height: "auto", marginBottom: 20 }}
                alt="fda"
              />
            </Box>

            <Box>
              <Typography>
                {locale.language === "tr"
                  ? details.fda.content.tr
                  : details.fda.content.en}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default AboutPage;
