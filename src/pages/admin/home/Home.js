import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Box,
  IconButton,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { Loading } from "components";
import { useDetails, useSnack } from "hooks";
import { ImagePicker } from "../product/components";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const AdminHomePage = () => {
  const { error, loading, details, setDetails, saveHome } = useDetails();
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
        <CardHeader subheader="Anasayfa içeriğini düzenle" title="Anasayfa" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">Slider</Typography>
                <IconButton
                  variant="contained"
                  onClick={() =>
                    setDetails({
                      ...details,
                      home: {
                        ...details.home,
                        slider: [
                          ...details.home.slider,
                          {
                            title: {
                              tr: "",
                              en: "",
                            },
                            subTitle: {
                              tr: "",
                              en: "",
                            },
                            images: [],
                          },
                        ],
                      },
                    })
                  }
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {details.home.slider.map((item, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography> Slider {index + 1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <ImagePicker
                            length={1}
                            order={index}
                            images={item.images}
                            removeImage={(selected) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].images.splice(
                                selected,
                                1
                              );
                              setDetails(newDetails);
                              snack("Silme Başarılı", "success");
                            }}
                            setSrc={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].images.push(e);
                              setDetails(newDetails);
                              snack("Yükleme Başarılı", "success");
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Başlık - Türkçe"
                            value={item.title.tr}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].title.tr =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Başlık - İngilizce"
                            value={item.title.en}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].title.en =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Alt başlık - Türkçe"
                            value={item.subTitle.tr}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].subTitle.tr =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Alt başlık - İngilizce"
                            value={item.subTitle.en}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.slider[index].subTitle.en =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        {index !== 0 && (
                          <Grid item xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ backgroundColor: "red" }}
                              onClick={() => {
                                const newDetails = { ...details };
                                newDetails.home.slider.splice(index, 1);
                                setDetails(newDetails);
                                snack("Silme Başarılı", "success");
                              }}
                            >
                              SİL
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">Bölümler</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {details.home.sections.map((item, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography> Bölüm {index + 1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <ImagePicker
                            length={1}
                            order={index}
                            images={item.images}
                            removeImage={(selected) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].images.splice(
                                selected,
                                1
                              );
                              setDetails(newDetails);
                              snack("Silme Başarılı", "success");
                            }}
                            setSrc={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].images.push(e);
                              setDetails(newDetails);
                              snack("Yükleme Başarılı", "success");
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Başlık - Türkçe"
                            value={item.title.tr}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].title.tr =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Başlık - İngilizce"
                            value={item.title.en}
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].title.en =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Alt Başlık - Türkçe"
                            value={item.subTitle.tr}
                            multiline
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].subTitle.tr =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Alt Başlık - İngilizce"
                            value={item.subTitle.en}
                            multiline
                            onChange={(e) => {
                              const newDetails = { ...details };
                              newDetails.home.sections[index].subTitle.en =
                                e.target.value;
                              setDetails(newDetails);
                            }}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  saveHome()
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

export default AdminHomePage;
