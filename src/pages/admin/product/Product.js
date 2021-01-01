import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "hooks";
import {
  Container,
  Card,
  Grid,
  TextField,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Box,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";
import { SketchPicker } from "react-color";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Page } from "components";

const useStyles = makeStyles((theme) => ({
  imageButton: {
    position: "relative",
    width: 100,
    height: 100,
    marginRight: theme.spacing(2),
  },

  imageSrc: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  input: {
    display: "none",
  },
}));

const AdminProductPage = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const { error, loading, product, setProduct } = useProduct(productId);
  if (loading) {
    return <div>Yükleniyor</div>;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }
  return (
    <Page title="Netan Beauty">
      <Container>
        <Card>
          <CardHeader
            subheader={productId === "new" ? "Yeni Ürün" : productId}
            title={productId === "new" ? "Yeni" : product.name.tr}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Adı - Türkçe"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: {
                        ...product.name,
                        tr: e.target.value,
                      },
                    })
                  }
                  value={product.name.tr}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Adı - İngilizce"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: {
                        ...product.name,
                        en: e.target.value,
                      },
                    })
                  }
                  value={product.name.en}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Altbaşlık - Türkçe"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      subName: {
                        ...product.subName,
                        tr: e.target.value,
                      },
                    })
                  }
                  value={product.subName.tr}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Altbaşlık - İngilizce"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      subName: {
                        ...product.subName,
                        en: e.target.value,
                      },
                    })
                  }
                  value={product.subName.en}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Fiyat"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: {
                        ...product.price,
                        normal: e.target.value,
                      },
                    })
                  }
                  value={product.price.normal}
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Sahte Fiyat"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: {
                        ...product.price,
                        pseudo: e.target.value,
                      },
                    })
                  }
                  value={product.price.pseudo}
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Renk Seçenekleri</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        options: [
                          ...product.options,
                          {
                            color: "#ABB8C3",
                            saleChannel: [
                              { link: "hepsiburada", shop: "" },
                              { link: "n11", shop: "" },
                              { link: "trendyol", shop: "" },
                            ],
                            images: [],
                          },
                        ],
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {product.options.map((item, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> SEÇENEK {index + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                              {item.images.map((item, imageIndex) => {
                                return (
                                  <ButtonBase
                                    focusRipple
                                    key={imageIndex}
                                    className={classes.imageButton}
                                  >
                                    <img
                                      src={item}
                                      className={classes.imageSrc}
                                    />
                                  </ButtonBase>
                                );
                              })}
                              {item.images.length < 3 && (
                                <>
                                  <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="icon-button-file"
                                    type="file"
                                  />
                                  <label htmlFor="icon-button-file">
                                    <IconButton
                                      variant="contained"
                                      component="span"
                                    >
                                      <AddIcon />
                                    </IconButton>
                                  </label>
                                </>
                              )}
                            </Box>
                          </Grid>
                          <Grid item container xs={12} md={6} spacing={3}>
                            {item.saleChannel.map((sale, saleIndex) => {
                              return (
                                <Grid key={saleIndex} item xs={12}>
                                  <TextField
                                    fullWidth
                                    onChange={(e) => {
                                      const newOptions = [...product.options];
                                      newOptions[index].saleChannel[
                                        saleIndex
                                      ].link = e.target.value;

                                      setProduct({
                                        ...product,
                                        options: [...newOptions],
                                      });
                                    }}
                                    label={sale.shop}
                                    value={sale.link}
                                    variant="outlined"
                                  />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default AdminProductPage;
