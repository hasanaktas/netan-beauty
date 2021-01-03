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

const AdminContactPage = () => {
  const { error, loading, details, setDetails, saveContact } = useDetails();
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
        <CardHeader subheader="İletişim bilgilerini düzenle" title="İletişim" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Başlık - Türkçe"
                value={details.contact.title.tr}
                multiline
                variant="outlined"
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.title.tr = e.target.value;
                  setDetails(newDetails);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Başlık - İngilizce"
                value={details.contact.title.en}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.title.en = e.target.value;
                  setDetails(newDetails);
                }}
                multiline
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Telefon"
                value={details.contact.phone}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.phone = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Fax"
                value={details.contact.fax}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.fax = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="E-Posta"
                value={details.contact.email}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.email = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres - Türkçe"
                value={details.contact.adress.tr}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.adress.tr = e.target.value;
                  setDetails(newDetails);
                }}
                multiline
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres - İngilizce"
                value={details.contact.adress.en}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.adress.en = e.target.value;
                  setDetails(newDetails);
                }}
                multiline
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Facebook"
                value={details.contact.social.facebook}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.social.facebook = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Instagram"
                value={details.contact.social.instagram}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.social.instagram = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Twitter"
                value={details.contact.social.twitter}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.social.twitter = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Youtube"
                value={details.contact.social.youtube}
                onChange={(e) => {
                  const newDetails = { ...details };
                  newDetails.contact.social.youtube = e.target.value;
                  setDetails(newDetails);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  saveContact()
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

export default AdminContactPage;
