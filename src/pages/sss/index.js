import React from "react";
import {
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Page, Section } from "components";
import { useLocale, useFirebase } from "hooks";

const AboutPage = () => {
  const [locale] = useLocale();
  const { details } = useFirebase();

  return (
    <Page title="SSS">
      <Section alternative>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {details.sss.content.map((item, index) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="subtitle1">
                      {item.title[locale.language]}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.content[locale.language]}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default AboutPage;
