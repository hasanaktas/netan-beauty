import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Container,
} from "@material-ui/core";
import { Loading } from "components";
import { useDetails, useSnack } from "hooks";

const AdminAboutPage = () => {
  const { error, loading, details, setDetails, saveAbout } = useDetails();
  const snack = useSnack();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    snack("HATA", "error");
    return <div>Bir Hata Meydana Geldi</div>;
  }

  return (
    <Container maxWidth="lg">
      <Card>
        <CardHeader
          subheader="Hakkımızda içeriğini düzenle"
          title="Hakkımızda"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="İçerik - Türkçe"
                value={details.about.content.tr}
                multiline
                variant="outlined"
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.about.content.tr = e.target.value;
                  setDetails(newDetails);
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="İçerik - İngilizce"
                value={details.about.content.en}
                multiline
                variant="outlined"
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.about.content.en = e.target.value;
                  setDetails(newDetails);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  saveAbout()
                    .then(() => {
                      snack("KAYDEDİLDİ", "success");
                    })
                    .catch(() => {
                      snack("HATA MEYDANA GELDİ", "error");
                    });
                }}
              >
                Kaydet
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminAboutPage;
